import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { BsPlusSquareFill } from 'react-icons/bs'
import Header from '../Header'
import Menu from '../Menu'
import AddHabit from './AddHabit'
import ListHabit from './ListHabit'
import UserContext from '../../contexts/UserContext';
import CountContext from '../../contexts/CountContext';

export default function HabitsPage() {
    const { user } = useContext(UserContext)
    const { count } = useContext(CountContext)
    const [habits, setHabits] = useState([])
    const [addHabit, setAddHabit] = useState(false);
    const [habitTitle, setHabitTitle] = useState("")
    const [days, setDays] = useState(null)
    const history = useHistory()
    
    function showFormAddHabit() {
        if (addHabit) { 
            setAddHabit(false)
        } else {
            setAddHabit(true)
        }
    }
    
    useEffect( () =>{
        const config ={
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        
        request.then( response => setHabits(response.data))
        request.catch( () => history.pushState("/habitos"))
    },[count])

    return (
        <>
        <Header/>
        <Container>
            <Heading>
                <div>
                    <Title>Meus hábitos</Title>
                    <PlustIcon onClick={showFormAddHabit}/>
                </div>
            </Heading>
            { addHabit ? <AddHabit setAddHabit={setAddHabit} count={count} setDays={setDays} days={days} habitTitle={habitTitle} setHabitTitle={setHabitTitle} /> : ""}
            {habits.length === 0 ? 
            <SubHeading>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </SubHeading> : 
            habits.map( habit => <ListHabit key={habit.id} habit={habit} />)}  
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
    & div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
const Title = styled.span`
    font-size: 23px;
    color: #126BA5;
`
const SubHeading = styled.span`
    font-size: 18px;
    color: #666;
`
const PlustIcon = styled(BsPlusSquareFill)`
    font-size: 30px;
    color: #52B6FF;
    border-radius: 5px;
`