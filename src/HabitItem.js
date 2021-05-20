import axios from 'axios'
import { useState, useContext } from 'react'
import UserContext from './contexts/UserContext';
import CountContext from './contexts/CountContext';
import styled from 'styled-components'
import { FaCheckSquare } from 'react-icons/fa'

export default function HabitItem({habit}) {
    const { user } = useContext(UserContext)
    const { count, setCount } = useContext(CountContext)
    const [selected,setSelected] = useState(false)
   
    function selectHabit() {
        habit.done = !habit.done
        setSelected(habit.done)
        if(habit.done){
            sendHabitDone()
            setCount(count+1)
        } else {
            sendHabitNotDone()
            setCount(count-1)
        }
    }

    function sendHabitDone() {
        const config = { 
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, habit, config)
        
        request.then(() => setCount(count+1))
        request.catch(() => alert("Erro!"))
    }

    function sendHabitNotDone(){
        const config = { 
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, habit, config)
    
        request.then(() => setCount(count-1))
            
        request.catch(() => alert("Erro!"))
    }

    return (
        <Item>
            <Description>
                <Title>{habit.name}</Title>
                <Data selected={habit.done}>
                    <div>Sequência atual: <span>{habit.currentSequence} dias</span></div>
                    <div>Seu recorde: {habit.highestSequence} dias</div>
                </Data>
            </Description>
            <SelectIcon onClick={selectHabit} selected={habit.done}/>
        </Item>
    )
}

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
    height: 94px;
`

const SelectIcon = styled(FaCheckSquare)`
    width: 69px;
    height: 69px;
    color: ${props => props.selected ? "#8FC549" : "#EBEBEB"};
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #666;
    height: 55px;
`

const Title = styled.div`
    font-size: 20px;
`

const Data = styled.div`
    font-size: 13px;

    & span {
        color:${props => props.selected ? "#8FC549" : "#666"};
    }
`