import styled from 'styled-components'

const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
background: #FFFFFF;
border-right: solid 1px #d3d3d3;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
height: 100vh;
text-align: left;
padding: 2rem;
position: fixed;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;
z-index: 1;
width: 100%;
max-width: 600px;

a {
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.2em;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;

  display: inline-block;
  padding: 10px 0px;
  position: relative;

  &:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 3px;
    left: 0;
    position: absolute;
    background: #000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover {
    color: #343078;
  }

  &:hover:after { 
    width: 100%; 
    left: 0; 
  }
}
`
  // 
  // 
  // 
  // letter-spacing: 0.4rem;
  // color: #0D0C1D;
  // transition: color 0.1s linear;
  // margin: 10;
  // @media (max-width: 576px) {
  //   font-size: 1.5rem;
  //   text-align: center;
  // }
export default StyledMenu;