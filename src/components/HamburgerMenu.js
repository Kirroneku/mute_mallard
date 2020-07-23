import React from 'react';
import StyledBurger from './Hamburger-styling/styled_burger';
import StyledMenu from './Hamburger-styling/styled_menu';
import { Link } from 'react-router-dom';
import LINKS from '../data/links';

function makeLink (curLink, text) {
  return (
    <div>
      <Link to={curLink} >
          {text}
      </Link>
    </div>

  )
}
// className={this.state.current==curLink? "link": "otherlink"}
// onClick={() => this.updateCurrent(curLink)}>
const Menu = ({ open }) => {
  const style = {
    marginBottom: 0,
    padding: 0
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
      <StyledBurger  open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
}

export {Burger, Menu};