import styled from "styled-components";

const border = "#333333";
export const BoxWrapper = styled.div`
  width: 500px;
  height: 330px;
  border: 3px solid ${border};
  border-radius: 15px;
  .childWrapper {
    width: 100%;
    height: calc(100% - 47px);
    padding: 2.7% 9%;
    border-radius: 0 0 10px 10px;
  }
  .childWrapper > div {
    width: 100%;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .childWrapper > div > table {
    width: 100%;
    height: max-content;
    /* background-color: orange; */
  }
`;

export const WindowWrapper = styled.div`
  width: 100%;
  height: 47px;
  background-color: ${border};
  border-radius: 6px 6px 0 0;
  .signal {
    width: 60px;
    height: 40px;
    margin-left: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .dots {
      width: 9px;
      height: 9px;
      border-radius: 50%;
    }
  }
`;
