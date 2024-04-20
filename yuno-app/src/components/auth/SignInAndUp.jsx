import React from "react";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import Header from "../layout/Header";
const Wrapper  = styled.section`
.App {
    font-family: sans-serif;
    text-align: center;
  }
  * {
    box-sizing: border-box;
  }
  
  body {
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    height: 100vh;
    margin: -20px 0 50px;
  }
  
.title {
    font-weight: bold;
    margin: 0;
  }
.content{
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }
  

.button-container{
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }
  
.button-container:active {
    transform: scale(0.95);
  }
  
.button-container:focus {
    outline: none;
  }
  
.ghost {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    background-color: transparent;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .ghost:active {
    transform: scale(0.95);
  }
  
.ghost:focus {
    outline: none;
  }
  
.form-account {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }
  
.user-input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }
  
  .container-submit {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
  }
  
  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }
  
  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }
  
  .container-submit.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }
  
  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }
  
  .container-submit.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }
  
  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }
  
    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }
  
  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }
  
  .container-submit.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }
  
  .overlay-account{
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }
  
  .container-submit.right-panel-active .overlay-account {
    transform: translateX(50%);
  }
  
  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }
  
  .overlay-left {
    transform: translateX(-20%);
  }
  
  .container-submit.right-panel-active .overlay-left {
    transform: translateX(0);
  }
  
  .overlay-right {
    right: 0;
    transform: translateX(0);
  }
  
  .container-submit.right-panel-active .overlay-right {
    transform: translateX(20%);
  }
  
  .social-container {
    margin: 20px 0;
  }
  
  .social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }
  /* Thêm CSS cho các kích thước màn hình nhỏ hơn 768px */
  @media screen and (max-width: 768px) {
      .container-submit {
        margin:50px;
      }
  
     
  }
  
  /* Thêm CSS cho các kích thước màn hình nhỏ hơn 480px */
  @media screen and (max-width: 480px) {
      .form-container,
      .overlay-container {
          width: 100%;
      }
  
      .overlay-panel {
          padding: 0 20px;
      }
  }
  
`;
const StyledBody = styled.body`
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -150px 0 50px;
  span {
    font-size: 12px;
  }
  
  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }
  
`;
const SignInAndUp = () => {
  const [type, setType] = useState("signIn");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container-submit " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <>
    <Header/>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,800"
        />
      </Helmet>
      <StyledBody>
      <Wrapper>
        <div className="App" >
        <div className={containerClass} id="container-submit">
          <Register />
          <Login />
          <div className="overlay-container">
            <div className="overlay-account">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p className="content">
                  To keep connected with us please login with your personal info
                </p>

                
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => handleOnClick("signIn")}
                >
                  Sign In
                </button>
    
               
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p  className="content">Enter your personal details and start journey with us</p>
        
                <button
                  className="ghost "
                  id="signUp"
                  onClick={() => handleOnClick("signUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Wrapper>
      </StyledBody>
       
   
    </>
  );
};

export default SignInAndUp;
