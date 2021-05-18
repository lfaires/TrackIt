import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

export default function Menu() {
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

    return(
        <>
        <Options>
            <Option onClick={goToHabitsPage}>Hábitos</Option>
            <Option onClick={goToHistoryPage}>Histórico</Option>
        </Options>
        <Today onClick={goToTodayPage}>Hoje</Today>
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
`

const Today = styled.button`
    position: fixed;
    bottom: 10px;
    left: 39vw;
    z-index: 3;
    font-size: 18px;
    color: #FFF;
    width: 91px;
    height: 91px;
    background: #52B6FF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`