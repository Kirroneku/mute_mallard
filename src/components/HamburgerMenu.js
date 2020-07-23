import React from 'react';
import StyledBurger from './Hamburger-styling/styled_burger';
import StyledMenu from './Hamburger-styling/styled_menu';
import { Link } from 'react-router-dom';
import LINKS from '../data/links';

function makeLink (curLink, text) {
  return (
      <Link to={curLink} >

          {text}
      </Link>
  )
}
// className={this.state.current==curLink? "link": "otherlink"}
// onClick={() => this.updateCurrent(curLink)}>
const Menu = ({ open }) => {
  const style = {
    display: 'inline-block',
    // color: 'black',
    margin: 10,
    marginBottom: 0,
}

  return (
    <StyledMenu id="ham" open={open}>
    {                                
      LINKS.map(LINK => {
          var curLink = makeLink(LINK.link, LINK.linkName);
          return(
              <h3 key={LINK.id} style={style}>
                  {curLink}
              </h3>
          )
      })
    }
    </StyledMenu>
  )
}

const Burger = ({ open, setOpen }) => {
    return (
      <StyledBurger id="hamToggle" open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
}

export {Burger, Menu};