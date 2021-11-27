import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
function header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt=" "></img>
      </a>
      <Menu>
        <a herf="#">Model S</a>
        <a herf="#">Model Y</a>
        <a herf="#">Model 3</a>
        <a herf="#">Model X</a>
      </Menu>
      <RightMenu>
        <a herf="#">Shop</a>
        <a herf="#">Tesla Account</a>
        <CustomMenu />
      </RightMenu>
    </Container>
  );
}

export default header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width:768px){
      display:none;
  }
`;
const RightMenu = styled.div`
display:flex;
align-items:center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu=styled(MenuIcon)`
cursor:pointer;
`
