import styled from 'styled-components'
import { BsTrash } from 'react-icons/bs'

export default function ListHabit() {
    return (
        <Item>
            <div>
                <Heading>Ler 1 capítulo de livro</Heading>
                <Weekdays>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </Weekdays>
            </div>
            <TrashIcon/>
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
const TrashIcon = styled(BsTrash)`
    font-size: 17px;
    background: #FFF;
`