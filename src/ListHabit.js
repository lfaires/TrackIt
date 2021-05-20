import axios from 'axios'
import styled from 'styled-components'
import { BsTrash } from 'react-icons/bs'
import { useState, useContext } from 'react'
import UserContext from './contexts/UserContext';

export default function ListHabit({habit}) {
    const { user } = useContext(UserContext)
    const [weekdays, setWeekdays] = useState([
        { id: 1, name: "D", days: 0},
        { id: 2, name: "S", days: 1},
        { id: 3, name: "T", days: 2},
        { id: 4, name: "Q", days: 3},
        { id: 5, name: "Q", days: 4},
        { id: 6, name: "S", days: 5},
        { id: 7, name: "S", days: 6}
    ])

    habit.days.forEach( i => {
        weekdays.map( e => {
        if (e.days === i){
            e.isSelected = true
        }
    })})

    function deleteHabit(habitId) {
        if(window.confirm("Você realmente deseja excluir este hábito?")){
            const config ={
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`,config)

            request.then(() => alert("Deletado"))
        } 
    }

    return (
        <Item>
            <div>
                <Heading>{habit.name}</Heading>
                <Weekdays>
                    {weekdays.map( item =>
                    <DayButton key={item.id} selected={item.isSelected}>{item.name}</DayButton>
                    )}
                </Weekdays>
            </div>
            <TrashIcon onClick={() => deleteHabit(habit.id)}/>
        </Item>
    )   
}

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90.7vw;
    height: 91px;
    border-radius: 5px;
    padding: 13px;
    margin-bottom: 10px;
    background: #FFF;
`
const Heading = styled.div`
    font-size: 20px;
    color: #666;
    margin-bottom: 8px;
`
const Weekdays = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const DayButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    margin-right: 4px;
    font-size: 20px;
    color: ${props => props.selected ? "#FFF" : "#DBDBDB"};
    background: ${props => props.selected ? "#CFCFCF" : "#FFF"};
`
const TrashIcon = styled(BsTrash)`
    font-size: 17px;
    background: #FFF;
`