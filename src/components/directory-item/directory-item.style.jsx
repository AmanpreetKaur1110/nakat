import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image:${({ imageUrl }) => `url(${imageUrl})`};
`;

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
  background-color:transparent;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color:rgb(32, 10, 10);
    text-transform: uppercase;
  }
  
  p {
    font-weight: lighter;
    font-size: 16px;
    color:rgb(32, 10, 10);
  }
`;

export const DirectoryItemContainer = styled.div`
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
  //  color: #4a4a4a;
   ${BackgroundImage} {
     transform: scale(1.1);
     transition: transform 7s cubic - bezier(0.25, 0.45, 0.45, 0.95);
 }
  
   ${Body} {
     opacity: 0.9;
     background-color:rgb(233, 249, 242);
     color: #4a4a4a;
   }
  }
  &: first-child {
    margin-right: 7.5px;
  }
  
  &: last-child {
     margin-left: 7.5px;
  }
`;