import styled from 'styled-components'
import { FaCheckSquare } from 'react-icons/fa'

export default function HabitItem() {
    return (
        <Item>
            <Description>
                <Title>Ler 1 capítulo de livro</Title>
                <Data>
                    <div>Sequência atual: 3 dias</div>
                    <div>Seu recorde: 5 dias</div>
                </Data>
            </Description>
            <PlusIcon selected={"selecte"}/>
        </Item>
    )
}

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
    height: 94px;
`

const PlusIcon = styled(FaCheckSquare)`
    width: 69px;
    height: 69px;
    color: ${props => props.selected === "selected" ? "#8FC549" : "#EBEBEB"};
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #666;
    height: 55px;
`

const Title = styled.div`
    font-size: 20px;
`

const Data = styled.div`
    font-size: 13px;
`