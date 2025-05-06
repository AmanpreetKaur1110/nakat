import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Navigation Container
export const NavigationContainer = styled.div`
  justify-content: space-between;
  margin-bottom: 30px;
  background: linear-gradient(
    to right,
    rgba(90, 68, 127, 0.9),
    rgba(105, 150, 180, 0.9)
  );
  align-items: center;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    gap: 10px;
  }
`;

// Logo Container
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 42rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

// Logo Image
export const LogoImage = styled.img`
  height: 90px;
  width: auto;
  max-width: 150px;
  object-fit: contain;
  border-radius: 50%;
`;

// Nav Links Container
export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 10px 15px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

// Individual NavLink
export const NavLink = styled(Link)`
  padding: 10px 5px;
  cursor: pointer;
  font-weight: 800;
  transition: transform 0.3s ease, color 0.3s ease;
  position: relative;
  text-decoration: none;
  color: white;

  &:hover {
    transform: scale(1.05);
    color: #ddd;
  }
`;

// Main Navigation Wrapper
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
    color: white;

    &:hover {
      color: #ddd;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Footer Container
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

// Social Links Wrapper
export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  a {
    color: white;
    transition: color 0.3s ease;

    &:hover {
      color: #ddd;
    }
  }

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

// Individual Social Link
export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  margin: 0 10px;

  &:hover {
    color: #ddd;
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    margin: 0 5px;
    font-size: 0.9rem;
  }
`;

// Copyright Text
export const CopyrightText = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 1rem;
`;
