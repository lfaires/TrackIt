import styled from 'styled-components'
import { BsPlusSquareFill } from 'react-icons/bs'
import Header from './Header'
import Menu from './Menu'
import AddHabit from './AddHabit'

export default function HabitsPage() {
    return (
        <>
        <Header/>
        <Container>
            <Heading>
                <div>
                    <Title>Meus hábitos</Title>
                    <PlustIcon/>
                </div>
            </Heading>
            <SubHeading>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </SubHeading>
            <AddHabit/>
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