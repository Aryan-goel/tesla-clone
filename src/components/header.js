import React,{useState}from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import {selectCars} from '../features/car/carSlice'; 
import {useSelector} from 'react-redux';

function Header() {
const[burgerStatus,setBurgerStatus]=useState(false);
const cars=useSelector(selectCars)
// console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt=" "></img>
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(
           <a key={index} herf="#">{car}</a>
        )
        
        )}
        {/* <a herf="#">Model S</a>
        <a herf="#">Model Y</a>
        <a herf="#">Model 3</a>
        <a herf="#">Model X</a> */}
      </Menu>
      <RightMenu>
        <a herf="#">Shop</a>
        <a herf="#">Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
        <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper >
        {cars && cars.map((car,index)=>(
            <li key={index}>
            <a herf="#">{car}</a>
          </li>
        )
        
        )}
        <li>
          <a herf="#">Existing Inventory</a>
        </li>
        <li>
          <a herf="#">Used Inventory</a>
        </li>
        <li>
          <a herf="#">Trade In</a>
        </li>
        <li>
          <a herf="#">CyberTruck</a>
        </li>
        <li>
          <a herf="#">Roadster</a>
        </li>
        <li>
          <a herf="#">Semi</a>
        </li>
        <li>
          <a herf="#">Charging</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
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
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
transition:transform .3s ease;

  justify-content: flex-start;
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(ClearIcon)`
cursor:pointer;
`;

const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;

`
