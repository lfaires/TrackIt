import axios from 'axios';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import logotipo from './assets/logotipo.png';

export default function LoginPage({setToken}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    let isDisabled = false;

    function login() {
        isDisabled = true;
        const body = {email, password};
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);

        //animação de loading
        
        request.then( response => {
            setToken(response.data.token);
            history.push("/hoje");
        })
        request.catch( () => {
            alert("Houve algum erro, tente novamente!");
            window.location();
            isDisabled = false;
        })
    }

    return (
        <Container>
            <Logo src={logotipo}></Logo>
            <Title>TrackIt</Title>
            <Input type="text" placeholder="email" value={email} onChange={ e => setEmail(e.target.value)} disabled={isDisabled}></Input>
            <Input type="password" placeholder="senha" value={password} onChange={ e => setPassword(e.target.value)} disabled={isDisabled}></Input>
            <Button onClick={login} disabled={isDisabled}>Entrar</Button>
            <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 68px 36px 199px 36px;

`
const Logo = styled.img`
    width: 42vw;
    height: 86.23px;
`
const Title = styled.div`
    font: 69px Playball;
    color: #126BA5;
`
const Input = styled.input`
    width: 81vw;
    height: 45px;
    margin-bottom: 6px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding: 10px;

    & ::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }
`
const Button = styled.button`
    width: 81vw;
    height: 45px;
    color: #FFF;
    font-size: 21px;
    background: #52B6FF;
    border-radius: 5px;
    border: none;
    margin-bottom: 25px;
`
const StyledLink = styled(Link)`
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline; 
`