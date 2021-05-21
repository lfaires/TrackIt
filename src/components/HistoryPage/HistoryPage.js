import styled from 'styled-components';
import Header from '../Header'
import Menu from '../Menu'

export default function HistoryPage() {
    return (
        <>
        <Header />
        <Container>
            <Heading>
                <Title>Histórico</Title>
                <Tracker>Em breve você poderá ver o histórico dos seus hábitos aqui!</Tracker>
            </Heading>
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
    margin-top: 17px; 
    font-size: 18px;
    color: #666;
`