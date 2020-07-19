import React from 'react';
import StyledBurger from './Hamburger-styling/styled_burger';
import StyledMenu from './Hamburger-styling/styled_menu';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">💁🏻‍♂️</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">💸</span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="contact">📩</span>
        Contact
        </a>
    </StyledMenu>
  )
}

const Burger = ({ open, setOpen }) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
}
  
  


// class HamburgerMenu extends Component {
    
//     state = {
//         closed: true
//     }

//     toggleHamburger = () => {
//         this.setState({closed: !this.state.closed})
//     }

//     render() {
//         return (<div></div>);
//         // <StyledBurger>

//         // </StyledBurger>
        
//     }
// }



export {Burger, Menu};