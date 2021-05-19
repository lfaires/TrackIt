import styled from 'styled-components'

export default function AddHabit() {
    return (
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
    )
}

const Item = styled.div`
    width: 90.7vw;
    height: 180px;
    background: #FFF;
    border-radius: 5px;
    padding: 18px 18px 15px 18px;
    margin-bottom: 28px;
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