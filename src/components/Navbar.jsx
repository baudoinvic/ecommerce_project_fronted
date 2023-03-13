import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { searchProduct } from "../redux/apiCalls";


const Container = styled.div`
   height: 60px;
  ${mobile({ height: "50px" })}
 `;

const Wrapper = styled.div`
   padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
   ${mobile({ padding: "10px 0px" })}
 `;

const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
 `;

const Language = styled.span`
   font-size: 14px;
   cursor: pointer;
   ${mobile({ display: "none" })}
 `;

const SearchContainer = styled.div`
   border: 0.5px solid lightgray;
   display: flex;
   align-items: center;
   margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
   border: none;
  ${mobile({ width: "50px" })}
 `;

const Center = styled.div`
   flex: 1;
   text-align: center;
 `;



const Logo = styled.h1`
   font-weight: bold;
   ${mobile({ fontSize: "24px" })}
   @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   ${mobile({ flex: 2, justifyContent: "center" })}
 `;

const MenuItem = styled.div`
   font-size: 14px;
  cursor: pointer;
   margin-left: 25px;
   ${mobile({ fontSize: "12px", marginLeft: "10px" })}
 `;



const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(useState)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" onChange={(e) => {
              dispatch(searchProduct(e.target.value));
            }} />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Buy with me.</Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => { dispatch(logout()); navigate("/") }}>LOGOUT</MenuItem>

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

