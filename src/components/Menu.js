import { useContext } from 'react'
import styled from 'styled-components'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useHistory } from 'react-router-dom'
import ProgressContext from '../contexts/ProgressContext';

export default function Menu() {
    const { progress } = useContext(ProgressContext)
    const history = useHistory()
    
    function goToHabitsPage(){
        history.push("/habitos")
    }

    function goToTodayPage(){
        history.push("/hoje")
    }

    function goToHistoryPage(){
        history.push("/historico")
    }

    let percentage = (progress*100).toFixed(0)

    return(
        <>
        <Options>
            <Option onClick={goToHabitsPage}>Hábitos</Option>
            <Today onClick={goToTodayPage}>
            <CircularProgressbar 
            value={percentage === "NaN" ? 0 : percentage} strokeWidth={10} text={'Hoje'}
            styles={buildStyles({
                pathColor: `rgb(255, 255, 255)`,
                strokeLinecap: 'round',
                trailColor: 'none',
                textSize: '25px',
                textColor: '#FFF',
            })}
            />    
            </Today>
            <Option onClick={goToHistoryPage}>Histórico</Option>
        </Options>
        
        
        </>
    )
}

const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    width: 100vw;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
`
const Option = styled.button`
    font-size: 18px;
    color: #52B6FF;
    display: flex;
    align-items: center;
    padding: 0 31px;
    height: 100%;
    width: 37.8vw;
`
const Today = styled.button`
    margin-bottom: 40px;
    z-index: 3;
    width: 24.4vw;
    height: 24.4vw;
    background: #52B6FF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`