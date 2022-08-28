import styled from "styled-components";

const primary = "#28274f";
export const ProfilePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${primary};
  padding: 50px 50px;
  display: flex;
  position: relative;
  & > div {
    margin-left: 40px;
  }
`;

const CardPrimary = "#3b3a38";
export const CardPlacer = styled.div`
  width: 475px;
  height: 256px;
  background-color: ${CardPrimary};
  border-radius: 30px 30px 10px 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px; ;
`;
// ("#2e324f");
export const CardWrapper = styled.div`
  width: 100%;
  height: 90%;
  background-color: #2e324f;
  border-radius: 30px;
  padding: 3% 5% 4.3% 5%;
  border: 1.8px solid #856e25;
  & > div {
    width: 100%;
    display: flex;
  }
`;

export const StandardWrap = styled.div`
  height: 18%;
  /* background-color: orange; */
  & > div {
    width: 50%;
    /* background-color: bisque; */
    margin: auto;
  }
  .name {
    h4 {
      color: #f0eff1;
    }
  }
  .buttonWrap {
    display: flex;
    justify-content: flex-end;
    .button {
      color: gold;
      padding: 7px 13px;
      border: 2px solid #817136;
      border-radius: 30px;
      font-family: serif;
      font-weight: 900;
      color: #dcca13;
    }
  }
`;

export const SubscribeWrap = styled.div`
  height: 20%;
  /* background-color: red; */
  & > div {
    width: 50%;
    /* background-color: bisque; */
    margin: auto;
    h1 {
      font-weight: 300;
      color: #c8c9d0;
    }
  }
  .sub {
    display: flex;
    justify-content: flex-end;
    /* background-color: blue; */
    text-align: right;
    color: #6f76a2;
    font-size: 12px;
    font-weight: bold;
    b {
      font-family: serif;
      font-size: 14px;
      color: #f6f4f7;
    }
  }
`;

export const DateWrap = styled.div`
  height: 20%;
  /* background-color: orangered; */
  & > div {
    width: 50%;
    margin: auto;
  }
`;

export const ProgressWrap = styled.div`
  height: 40%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 12px;

  .barWrap {
    height: 40px;
    width: 100%;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .date {
    width: 100%;

    div {
      width: 50%;
      color: #6d76a1;
    }
    display: flex;
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 14px;
  border: 1.9px solid #444979;
  background-color: #1e2038;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: -7px;
    bottom: -7px;
    left: -2px;
    width: 2.5px;
    background-color: #a3aee5;
    border-radius: 2px;
  }
  ::after {
    content: "";
    position: absolute;
    top: -7px;
    bottom: -7px;
    right: -2px;
    width: 2.5px;
    background-color: #fd94a7;
    border-radius: 10px;
  }
  .length {
    transition: all 1s ease 2s;
    height: 100%;
    background: #0bc8ed;
    border-radius: 0 30px 30px 0;
    background: linear-gradient(to right, #54a0c6, #44fed9);
  }
`;

export const GoToCards = styled.div`
  position: absolute;
  width: 100%;
  margin-left: 0px;
  /* height: 100%; */
  top: 500px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: red;
  }
`;
