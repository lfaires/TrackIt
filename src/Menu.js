import styled from 'styled-components'

export default function Menu() {
    return(
        <>
        <Options>
            <Option>Hábitos</Option>
            <Option>Histórico</Option>
        </Options>
        <Today>Hoje</Today>
        </>
    )
}

const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
`
const Option = styled.div`
    font-size: 18px;
    color: #52B6FF;
    display: flex;
    align-items: center;
    padding: 0 31px;
    height: 100%;
`

const Today = styled.div`
    position: fixed;
    bottom: 10px;
    left: 37.9vw;
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