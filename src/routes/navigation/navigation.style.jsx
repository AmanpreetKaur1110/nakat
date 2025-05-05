import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  margin-bottom: 30px;
  background: linear-gradient(
    to right,
    rgba(90, 68, 127, 0.9),
    rgba(105, 150, 180, 0.9)
  );
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 20rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const LogoImage = styled.img`
  height: 90px;
  width: auto;
  max-width: 150px;
  object-fit: contain;
  border-radius: 50%;

  @media (max-width: 480px) {
    height: 70px;
    max-width: 100px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
    justify-content: flex-start;
    width: 100%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 5px;
  cursor: pointer;
  font-weight: 800;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MainNavigation = styled.nav`
  display: flex;
  gap: 1.5rem;
  font-weight: 800;
  padding: 10px;

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  a {
    text-decoration: none;
    padding: 0.5rem;
    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FooterContainer = styled.footer`
  background: linear-gradient(
    to right,
    rgba(90, 68, 127, 0.9),
    rgba(105, 150, 180, 0.9)
  );
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  margin-top: auto;
  gap: 2rem; 

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
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

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  margin: 0 10px;
`;

export const CopyrightText = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;
export const LogoHeading = styled.h1`
  font-size: 2rem;
  color: white;
  margin-left: 1rem;
  font-weight: bold;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

