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
position: absolute;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;

@media (max-width: 600px) {
    width: 100%;
  }

a {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.4rem;
  color: #0D0C1D;
  transition: color 0.1s linear;
  margin: 10;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: #343078;
  }
}
`

export default StyledMenu;