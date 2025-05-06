import styled from 'styled-components';

// Background image for each directory item
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: transform 0.7s ease;
`;

// Text overlay on image
export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  opacity: 0.7;
  position: absolute;
  background-color: transparent;
  text-align: center;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: rgb(32, 10, 10);
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    color: rgb(32, 10, 10);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`;

// Directory item container
export const DirectoryItemContainer = styled.div`
  position: relative;
  min-width: 30%;
  height: 25rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
    }

    ${Body} {
      opacity: 0.9;
      background-color: rgb(233, 249, 242);
    }
  }

  // Remove typos and fix pseudo-selectors
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media (max-width: 1024px) {
    min-width: 45%;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    height: 20rem;
  }
`;










