import styled from "styled-components";

export const Tr = styled.tr`
  min-height: 70px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  .errorShow {
    position: absolute;
    left: 0;
    bottom: -20px;
    color: rgba(242, 38, 19, 1);
    font-size: 10px;
    line-height: 10px;
  }
`;

const line = "black";
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 2.5px solid ${line};
  background-color: transparent;
  color: rgba(0, 0, 0, 0.7);
  font-size: large;
  cursor: pointer;
  :focus {
    border-color: rgba(0, 0, 0, 0.4);
    caret-color: black;
  }
  ::-webkit-datetime-edit-year-field:not([aria-valuenow]),
  ::-webkit-datetime-edit-month-field:not([aria-valuenow]),
  ::-webkit-datetime-edit-day-field:not([aria-valuenow]) {
    color: transparent;
  }
`;
