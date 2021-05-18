import styled from 'styled-components'
import Header from './Header'
import HabitItem from './HabitItem'

export default function TodayPage() {
    return (
        <>
        <Header />
        <Container>
            <Day>
                <Title>Segunda, 17/05</Title>
                <Tracker>Nenhum hábito concluído ainda</Tracker>
            </Day>
            <HabitItem/>
            <HabitItem/>
            <HabitItem/>
        </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 98px 0px 101px 0px;
    padding: 0 18px;
    background: #E5E5E5;
`
const Day = styled.div`
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