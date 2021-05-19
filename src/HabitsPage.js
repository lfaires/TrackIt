import styled from 'styled-components'
import { BsPlusSquareFill } from 'react-icons/bs'
import Header from './Header'
import Menu from './Menu'

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
            <Item>
                <Input placeholder="nome do hábito"></Input>
                <Weekdays>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </Weekdays>
                <Buttons>
                    <Cancel>Cancelar</Cancel>
                    <Save>Salvar</Save>
                </Buttons>
            </Item>
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
const Item = styled.div`
    width: 90.7vw;
    height: 180px;
    background: #FFF;
    border-radius: 5px;
    padding: 18px 18px 15px 18px;
`
const Input = styled.input`
    width: 100%;
    height: 45px;
    margin-bottom: 10px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding: 10px;

    & ::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }
`
const Weekdays = styled.div`

    & button {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        margin-right: 4px;
        font-size: 20px;
        color: #DBDBDB;
    }
`
const Cancel = styled.button`
    height: 35px;
    width:84px;
    background: #FFF;
    color: #52B6FF;
    font-size: 16px;
    border-radius: 5px;
    margin-right: 23px;
`
const Save = styled.button`
    height: 35px;
    width:84px;
    background: #52B6FF;
    color: #FFF;
    font-size: 16px;
    border-radius: 5px;
`
const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 28px;

`