import React from 'react';
import styled from 'styled-components';
import icon from '../../img/register.svg'

const Navbar = () => {
  return ( 
    <NavbarWrapper className="navbar navbar-light">
      <div className="title">
        <img src={icon} alt="icon" />
        NOTES
        </div>
      
      

    </NavbarWrapper>
   );
}
 
export default Navbar;

const NavbarWrapper = styled.nav`
  background: var(--navbarColor);
  margin-bottom: 20px;
  color: white !important;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 60px !important;
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .title {
    font-weight: bold !important;
    font-size: 24px;
    color:  white;
  }
`