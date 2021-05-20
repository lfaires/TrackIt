import { useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import logotipo from './assets/logotipo.png'

export default function SignUpPage() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isDisabled, setIsDisabled] = useState(false);
    const history = useHistory()
    
    function signUp(){
        setIsDisabled(true)
        const body ={ email, name, image, password}

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",body)

        request.then( response => {
            history.push("/")
            alert("Cadastro feito com sucesso!")
        })
        request.catch( (error) => {
            alert("Tente novamente!")
            setIsDisabled(false)
        })
    }

    return (
        <Container>
            <Logo src={logotipo}></Logo>
            <Title>TrackIt</Title>
            <Input type="text" placeholder="email" value={email} onChange={ e => setEmail(e.target.value)} disabled={isDisabled}></Input>
            <Input type="password" placeholder="senha" value={password} onChange={ e => setPassword(e.target.value)} disabled={isDisabled}></Input>
            <Input type="text" placeholder="nome" value={name} onChange={ e => setName(e.target.value)} disabled={isDisabled}></Input>
            <Input type="text" placeholder="foto" value={image} onChange={ e => setImage(e.target.value)} disabled={isDisabled}></Input>
            <Button onClick={signUp} disabled={isDisabled}>Cadastrar</Button>
            <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #FFF;
    padding: 68px 36px 97px 36px;
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

    &::placeholder {
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