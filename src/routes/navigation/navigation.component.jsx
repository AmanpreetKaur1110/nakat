import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import  logo  from '../../assets/logo.jpg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import { NavigationContainer, NavLinks, NavLink, LogoContainer, MainNavigation ,LogoImage, FooterContainer,
  SocialLinks, CopyrightText, SocialLink } from './navigation.style.jsx';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import '../../components/header/header.style.scss';


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      < NavigationContainer>
        <NavLinks>
        <LogoContainer to='/'>
        <LogoImage src={logo} alt="Company Logo" />
        </LogoContainer>
          <MainNavigation>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </MainNavigation>
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser} >
              SING OUT</NavLink>)
              : (<NavLink to='/auth'>
                SINGIN
              </NavLink>
              )
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </ NavigationContainer>
      <Outlet />
      <FooterContainer>
        <SocialLinks>
          <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </SocialLink>
          <a href="https://instagram.com/kalaakari_verse" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <SocialLink href="https://youtube.com/@kalakaari_bnl" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </SocialLink>
        </SocialLinks>
        <CopyrightText>
          © {new Date().getFullYear()} Kalaakari Verse. All Rights Reserved.
        </CopyrightText>
      </FooterContainer>


    </Fragment>
  );
};

export default Navigation;