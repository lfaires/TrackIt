import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import styled from 'styled-components';


import Header from '../../components/Header';
import Menu from '../../components/Menu';
import HabitItem from './HabitItem';

import UserContext from '../../contexts/UserContext';
import ProgressContext from '../../contexts/ProgressContext';
import CountContext from '../../contexts/CountContext';

export default function Today() {
    const userSerialized = localStorage.getItem("User")
    const userDeserialized = JSON.parse(userSerialized)
    const { user } = useContext(UserContext)
    const { count} = useContext(CountContext)
    const { progress, setProgress } = useContext(ProgressContext)
    const [habits, setHabits] = useState([])
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
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/trackit/habits/today`, config)

        request.then( response => {
            setHabits(response.data)
            const doneHabits = response.data.filter( item => item.done).length 
            const totalHabits = response.data.length
            const percent = doneHabits/totalHabits
            setProgress(percent)
        })
        request.catch(()=>alert("tenta novamente!"))
    },[count])
   
        function selectHabit(idHabit) {
            const newHabits = habits.map( habit => {
                if(habit.id === idHabit){
                    habit.done = !habit.done
                }
                return habit
            })
            setHabits(newHabits)
         }
    return (
        <>
        <Header />
        <Container>
            <Heading>
                <Title>{weekday()}, {now.format("DD/MM")}</Title>
                {habits.reduce((acc,item) => acc || item.done, false) ? <Tracker selected>{progressHabit()}% dos hábitos concluídos</Tracker> :<Tracker>Nenhum hábito concluído ainda</Tracker>}
            </Heading>
           {habits.map( habit => <HabitItem key={habit.id} habit={habit} selectHabit={selectHabit} />)}
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
    margin-bottom: 97px;
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