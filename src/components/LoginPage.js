import axios from 'axios';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import Loader from 'react-loader-spinner'
import logotipo from '../assets/logotipo.png';

export default function LoginPage({setUser, validEmail}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [isDisabled, setIsDisabled] = useState(false);

    function validation(){
        if (!validEmail(email) || email === ""){alert("Insira um email válido");return} 
        if (password === ""){alert("insira uma senha");return}
        return true
    }

    function login() {
        if (!validation()){return}
        setIsDisabled(true);
        const body = {email, password};
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
        
        request.then( response => {
            setUser(response.data);
            const userSerialized = JSON.stringify(response.data)
            localStorage.setItem("User",userSerialized)
            history.push("/hoje");
        })
        request.catch( () => {
            alert("Email ou senha inválidos!");
            setIsDisabled(false);
        })
    }

    return (
        <Container>
            <Logo src={logotipo}></Logo>
            <Title>TrackIt</Title>
            <Input type="text" placeholder="email" value={email} onChange={ e => setEmail(e.target.value)} disabled={isDisabled}></Input>
            <Input type="password" placeholder="senha" value={password} onChange={ e => setPassword(e.target.value)} disabled={isDisabled}></Input>
            <Button onClick={login} disabled={isDisabled}>{ !isDisabled ? "Entrar" : <Loader type="ThreeDots" color="#FFF" height={15}/>}</Button>
            <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #FFF;
    padding: 68px 36px 205px 36px;
`
const Logo = styled.img`
    width: 42vw;
    height: 86.23px;
`
const Title = styled.div`
    font: 69px Playball;
    color: #126BA5;
    margin-bottom: 32px;
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
`
const StyledLink = styled(Link)`
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline; 
`