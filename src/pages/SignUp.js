import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner'

import logotipo from '../assets/images/logotipo.png';

export default function SignUp({validURL, validEmail}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isDisabled, setIsDisabled] = useState(false);
  const history = useHistory()

  function validation() {
    if (!validEmail(email) || email === ""){alert("Insira um email válido");return }
    if (password === ""){alert("insira uma senha");return}
    if (name === ""){alert("insira o nome do perfil");return}
    if (!validURL(image) || image === ""){alert("Insira uma URL válida");return}
    return true
  }

  function submit(e) {
    e.preventDefault();   
    if (!validation()){return}
    setIsDisabled(true)
    const body ={ email, name, image, password}
    const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/sign-up`,body)

    request.then(() => {
        history.push("/")
        alert("Cadastro feito com sucesso!")
    })

    request.catch(() => {
        alert("Tente novamente!")
        setIsDisabled(false)
        history.push("/cadastro")
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
        <Input 
            type="text" 
            placeholder="nome" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            disabled={isDisabled}
        />
        <Input 
            type="text" 
            placeholder="foto" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
            disabled={isDisabled}
        />
        <Button disabled={isDisabled}>
          { !isDisabled ? "Cadastrar" : <Loader type="ThreeDots" color="#FFF" height={15} />}
        </Button>
        <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
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
    padding: 68px 36px 97px 36px;
`;
const Form = styled.form`
    text-align: center;
    padding: 3%;
`
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
    width: 100%;
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
    width: 100%;
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