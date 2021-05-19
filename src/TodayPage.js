import styled from 'styled-components'
import Header from './Header'
import Menu from './Menu'
import HabitItem from './HabitItem'

export default function TodayPage() {
    return (
        <>
        <Header />
        <Container>
            <Heading>
                <Title>Segunda, 17/05</Title>
                <Tracker>Nenhum hábito concluído ainda</Tracker>
            </Heading>
            <HabitItem/>
            <HabitItem/>
            <HabitItem/>
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
    font-size: 18px;
    color: #BABABA;
`