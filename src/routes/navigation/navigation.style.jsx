import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const NavigationContainer = styled.div`
//  height: 110px;
//  width: 100%;
//  display: flex;
 justify-content: space-between;
 margin-bottom: 30px;
   background: linear-gradient(
    to right,
    rgba(90, 68, 127, 0.9),
    rgba(105, 150, 180, 0.9)
  );
 align-items: center;
 padding: 0 50px;
`;

export const LogoContainer = styled(Link)`
 height: 100%;
 width: 42rem;

`

export const NavLinks  = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 10px 15px;
  gap: 40px;
`

export const NavLink = styled(Link)`
  padding: 10px 5px;
  cursor: pointer;
  font-weight: 800;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`

export const LogoImage = styled.img`
  height: 90px;
  width: auto;
  max-width: 150px;
  object-fit: contain;
  display: flex;
  border-radius: 50%;
`;

export const MainNavigation = styled.nav`
  display: flex;
  gap: 1.5rem;
  font-weight: 800;
  padding:10px;
   @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
  
  a {
    text-decoration: none;
    padding: 0.5rem;
    transition: color 0.3s ease;
    
  }
`;

export const FooterContainer = styled.footer`
   background: linear-gradient(
    to right,
    rgba(90, 68, 127, 0.9),
    rgba(105, 150, 180, 0.9)
  );
  color: white;
  padding: 2rem 0;
  text-align: center;
  margin-top: auto;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  a {
    color: white;
    transition: color 0.3s ease;
  }
`;

export const CopyrightText = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  margin: 0 10px;

`;
