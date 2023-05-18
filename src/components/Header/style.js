import { styled } from "styled-components";

const StyleHeader = styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  & > .left-side p:nth-child(1) {
    font-weight: 900;
    font-size: 2rem;
  }
  & > .left-side p:nth-child(2) {
    font-size: 16px;
  }
  & > .right-side {
    display: flex;
    align-items: center;
    .menu-container {
      width: 26px;
      height: 26px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid transparent;
    }
    /* .menu-container > div {
      width: 18px;
      height: 4px;
      background-color: #000;
      transition: 0.5s;
      border-radius: 8px;
      ${({ openMenu }) =>
      openMenu ? "transform: rotate(45deg);transform-origin: 1px 8px;" : ""}
    }
    .menu-container > div:nth-child(2) {
      width: 26px;
      ${({ openMenu }) =>
      openMenu ? "transform: rotate(-45deg);transform-origin:center;" : ""}
    }
    .menu-container > div:nth-child(3) {
      align-self: end;
      ${({ openMenu }) => (openMenu ? "transform-origin: 18px 2px;" : "")}
    } */
    .menu-container > div {
      width: 18px;
      height: 4px;
      background-color: #555;
      transition: 0.5s;
      border-radius: 8px;
      ${({ openMenu }) =>
        openMenu ? "transform: rotate(45deg);transform-origin: 2px 0px;" : ""}
    }
    .menu-container > div:nth-child(2) {
      width: 26px;
      ${({ openMenu }) =>
        openMenu
          ? "transform: rotate(-45deg);transform-origin: 15px 8px;width:34px"
          : ""}
    }
    .menu-container > div:nth-child(3) {
      align-self: end;
      ${({ openMenu }) => (openMenu ? "transform-origin: 15px 4px;" : "")}
    }
  }
`;
export default StyleHeader;
