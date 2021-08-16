import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import logotipo from '../assets/images/logotipo.png';

export default function Login({setUser, validEmail}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [isDisabled, setIsDisabled] = useState(false);

  function validation(){
    if (!validEmail(email) || email === ""){alert("Insira um email válido");return} 
    if (password === ""){alert("insira uma senha");return}
    return true
  }

  function submit(e) {
    e.preventDefault();
    if (!validation()){return}
    setIsDisabled(true);
    const body = {email, password};
    const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, body);
    
    request.then((response) => {
        setUser(response.data);
        history.push("/hoje");
    })
    request.catch(() => {
        alert("Email ou senha inválidos!");
        setIsDisabled(false);
    })
  }

  return (
    <Page>
      <Form onSubmit={submit}>
        <Logo src={logotipo}></Logo>
        <Title>TrackIt</Title>
        <Input 
            type="email" 
            placeholder="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            disabled={isDisabled} 
        />
        <Input 
            type="password" 
            placeholder="senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            disabled={isDisabled} 
        />
        <Button disabled={isDisabled}>
            {!isDisabled ? "Entrar" : <Loader type="ThreeDots" color="#FFF" height={15} />}
        </Button>
        <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
      </Form>
    </Page>
    )
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #FFF;
    padding: 68px 36px 205px 36px;
`;
const Form = styled.form`
    text-align: center;
    padding: 3%;
`;
const Logo = styled.img`
    width: 42vw;
    height: 86.23px;
`;
const Title = styled.div`
    font: 69px Playball;
    color: #126BA5;
    margin-bottom: 32px;
`;
const Input = styled.input`
    width: 81vw;
    height: 45px;
    margin-bottom: 6px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding: 10px;

    &::placeholder {
        font-size: 20px;
        color: #c5c5c5;
    }
`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 81vw;
    height: 45px;
    color: #FFF;
    font-size: 21px;
    background: #52B6FF;
    opacity: ${props => !props.disabled ? "1" : "0.7"};
    border-radius: 5px;
    border: none;
    margin-bottom: 25px;
`;
const StyledLink = styled(Link)`
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline; 
`;