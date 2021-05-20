import axios from 'axios'
import dayjs from 'dayjs'
import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import UserContext from './contexts/UserContext';
import Header from './Header'
import Menu from './Menu'
import HabitItem from './HabitItem'
import ProgressContext from './contexts/ProgressContext';

export default function TodayPage() {
    const { user } = useContext(UserContext)
    const { progress, setProgress } = useContext(ProgressContext)
    const [habits, setHabits] = useState([])
    const [countHabit, setCountHabit] = useState(0)
    const [count, setCount] = useState(0)
    const now = dayjs()
    const daysOfweek = [
        { id:0, name: "Domingo" },
        { id:1, name: "Segunda" },
        { id:2, name: "Terça" },
        { id:3, name: "Quarta" },
        { id:4, name: "Quinta" },
        { id:5, name: "Sexta" },
        { id:6, name: "Sábado" },
    ]
   
    function weekday() {
        const dayOfWeek = daysOfweek.filter( item => item.id === now.day())
        return dayOfWeek[0].name
    }

    function progressHabit(){
        const newProgress = (100*progress).toFixed(0)
        return newProgress
    }
  
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)

        request.then( response => {
            setHabits(response.data)
            const ndone = response.data.filter( item => item.done).length
            console.log("qntds habitos feitos:",ndone) 
            const total = response.data.length
            console.log("qtds total de habitos",total)
            const p = ndone/total
            setProgress(p)
        })
        request.catch(()=>alert("tenta novamente!"))
    }
        ,[count])
   
    return (
        <>
        <Header />
        <Container>
            <Heading>
                <Title>{weekday()}, {now.format("DD/MM")}</Title>
                {habits.reduce((acc,item) => acc || item.done, false) ? <Tracker selected>{progressHabit()}% dos hábitos concluídos</Tracker> :<Tracker>Nenhum hábito concluído ainda</Tracker>}
            </Heading>
            { habits.map( habit => <HabitItem key={habit.id} habit={habit} setCount={setCount} count={count} />)}
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
    margin-top: 5px;
    font-size: 18px;
    color: ${props => props.selected ? "#8FC549" :"#BABABA"};
`