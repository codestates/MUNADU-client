import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4em;
  left: 0px;
  top: 0px;
  background: ${(props) => props.theme.color.black};
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 64%;
  height: 4em;
  background: ${(props) => props.theme.color.black};
  @media (max-width: 1024px) {
    width: 95%;
  }
`;
const HeaderLogo = styled.div`
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
`;
const BtnBoard = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
const HbgBtn = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: block;
  }
`;
const HbgMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  transition: 0.5s;
  position: absolute;
  top: 4em;
  height: 100vh;
  width: 300px;
  right: ${(props) => (props.isOpen ? "0px" : "-300px")};
  @media (max-width: 1024px) {
    display: block;
    justify-content: center;
    background-color: white;
  }
`;
const HbgMenuBtnBoard = styled.div`
  background-color: ${(props) => props.theme.color.black};
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  button {
  }
`;

const HbgMenuBtn = styled.div`
  background-color: ${(props) => props.theme.color.white};
  width: 100%;
  text-align: center;
  margin: 13px 0px;
  cursor: pointer;
`;

const Header = {
  HeaderWrapper,
  HeaderBox,
  HeaderLogo,
  BtnBoard,
  HbgBtn,
  HbgMenu,
  HbgMenuBtnBoard,
  HbgMenuBtn,
};

export default Header;
