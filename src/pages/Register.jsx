
import { userRequest } from "../requestMethods";
import styled from "styled-components";
import { mobile } from "../responsive";
import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"

import axios from 'axios';
import { register } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://coolbackgrounds.io/images/backgrounds/black/black-compute-ea4c57a4.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

  const Register = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    console.log(isLoggedIn, "Login Status")
   const [formFilled, setFormFilled] = useState(false);
   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [username, setUserName] = useState("")
   const [email, setEmail] = useState("")
   const [address, setAddress] = useState("")
   const [password, setPassword] = useState("")

   const navigate = useNavigate();

   useEffect(()=>{
    if (isLoggedIn == true) {
      navigate("/home")
    }
   },[isLoggedIn])

  const handleCreateAccount = (e) => {
    e.preventDefault()
      dispatch(register({
        firstname: firstName,
        lastname: lastName,
        username,
        email,
        address,
        password
      }))
      //  setFormFilled(true);
    };
     const handleGoToLogin = () => {
              navigate("/Login");
           };
           
 

  return (
    <Container>
      <Wrapper>

      {formFilled ? (
          <>
             <Button onClick={handleGoToLogin}>GO TO LOGIN</Button>
          </>
        ) : (
          <>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
        <Input placeholder="firstname" onChange={(e)=>{
          e.preventDefault()
          setFirstName(e.target.value)
        }} />
        <Input placeholder="lastname" onChange={(e)=>{
          e.preventDefault()
          setLastName(e.target.value)
        }}  />
          <Input placeholder="username" onChange={(e)=>{
          e.preventDefault()
          setUserName(e.target.value)
        }}  />
          <Input placeholder="email" onChange={(e)=>{
          e.preventDefault()
          setEmail(e.target.value)
        }}  />
          <Input placeholder="address" onChange={(e)=>{
          e.preventDefault()
          setAddress(e.target.value)
        }}  />
          <Input placeholder="password"  type="password" onChange={(e)=>{
          e.preventDefault()
          setPassword(e.target.value)
        }} />
         
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={(e)=>handleCreateAccount(e)}>CREATE</Button>
        </Form>
        </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Register;
