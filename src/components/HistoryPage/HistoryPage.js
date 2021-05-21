import styled from 'styled-components';
import Calendar from 'react-calendar'
import axios from 'axios'
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs'
import Header from '../Header'
import Menu from '../Menu'
import { useEffect, useState, useContext } from 'react'
import UserContext from '../../contexts/UserContext';

export default function HistoryPage() {
    const { user } = useContext(UserContext)
    const [histories, setHistories] = useState([])
    const today = [dayjs().format("DD/MM/YYYY")]

    useEffect(() => {
        const config ={
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", config)

        request.then( response => setHistories(response.data))
    }, [])
    
    function check() {
        const checked = histories.map( day => {
           return {day: day.day,allDone: day.habits.reduce( (acc,habit) => (acc && habit.done) ,true)}
        })
        return checked
    }
    const allHabitsDone = check().filter(habit => habit.allDone).map( day => day.day)
    const notAllHabitsDone = check().filter(habit => !habit.allDone).map( day => day.day)
  
    return (
        <>
        <Header />
        <Container>
            <Heading>
                <Title>Histórico</Title>
            </Heading>
            <Calendar className={"calendar"} locale={'pt-br'} calendarType={'US'}
            tileClassName={({ date, view }) =>
            today.find((day) => day === dayjs(date).format("DD/MM/YYYY")) ? "" : (notAllHabitsDone.find((day) => day === dayjs(date).format("DD/MM/YYYY"))
              ? "not-done"
              : (allHabitsDone.find((day) => day === dayjs(date).format("DD/MM/YYYY")) ? "done" : "all"))}/>
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

    .calendar{
        border-radius: 10px;
        border: none;
        height: 402px; 
    }
    .done {
        background-color: #8CC654;
        border-radius: 50%;
        height:46px;
        width: 46px;
  }
    .not-done {
        background-color: #EA5766;
        border-radius: 50%;
        height:46px;
        width: 46px;
  }
    .all {
        height:46px;
        width: 46px;
  }
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