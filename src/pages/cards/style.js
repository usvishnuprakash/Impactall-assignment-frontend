import styled from "styled-components";

export const CardsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 5% 50px 5%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 180px;
  justify-items: center;
  align-items: center;
  grid-gap: 68px 20px;
  background-color: #28274f;
  position: relative;
`;

export const SmallCard = styled.div`
  width: 230px;
  height: 180px;
  background-color: #575bb2;
  border-radius: 30px;
  box-shadow: black 0px 20px 30px -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 70px;
    height: 70px;
  }
`;

export const Popup = styled.div`
  position: absolute;
  top: 100px;
  bottom: 100px;
  left: 10%;
  right: 10%;
  background-color: #575bb2;
  border-radius: 50px;

  & > div {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .loading {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
  }
  iframe {
    width: 100%;
    height: 100%;
    z-index: 10;
  }
`;
