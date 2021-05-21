import axios from 'axios'
import { useContext } from 'react'
import UserContext from './contexts/UserContext';
import CountContext from './contexts/CountContext';
import styled from 'styled-components'
import { FaCheckSquare } from 'react-icons/fa'

export default function HabitItem({habit, selectHabit}) {
    const { user } = useContext(UserContext)
    const { count, setCount } = useContext(CountContext)

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

    function currentEqualToHighest(){
        const current = habit.currentSequence
        const highest = habit.highestSequence
        return (current === highest && highest !== 0)
    }

    return (
        <Item>
            <Description>
                <Title>{habit.name}</Title>
                <Data >
                    <div>Sequência atual: <Seq selected={habit.done}>{habit.currentSequence} dias</Seq></div>
                    <div>Seu recorde: <Seq selected={currentEqualToHighest()}>{habit.highestSequence} dias</Seq></div>
                </Data>
            </Description>
            <SelectIcon onClick={() => {selectHabit(habit.id); habit.done ? sendHabitDone() : sendHabitNotDone()}} selected={habit.done}/>
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
`
const Seq = styled.span`
    color:${props => props.selected ? "#8FC549" : "#666"};
`