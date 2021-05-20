import axios from 'axios'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import UserContext from './contexts/UserContext';
import Header from './Header'
import Menu from './Menu'
import HabitItem from './HabitItem'

export default function TodayPage() {
    const { user } = useContext(UserContext)

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)

        request.then( response => console.log(response))
        request.catch(()=>alert("tenta novamente!"))
    }
        ,[])
    return (
        <>
        <Header />
        <Container>
            <Heading>
                <Title>Segunda, 17/05</Title>
                <Tracker>Nenhum hábito concluído ainda</Tracker>
            </Heading>
            <HabitItem/>
            <HabitItem/>
            <HabitItem/>
        </Container>
        <Menu/>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 70px 0px;
    padding: 28px 18px 0 18px;
    background: #F2F2F2;
`
const Heading = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 28px;
`

const Title = styled.span`
    font-size: 23px;
    color: #126BA5;
`

const Tracker = styled.span`
    font-size: 18px;
    color: #BABABA;
`