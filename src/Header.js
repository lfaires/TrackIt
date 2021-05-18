import styled from 'styled-components'
import logotipo from './assets/logotipo.png'
export default function Header() {
    return (
        <Head>
            <Title>Trackit</Title>
            <ProfileImg src={logotipo}/>
        </Head>
    )
}

const Head = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100vw;
    height: 70px;
    padding: 0 18px;
    background: #126BA5;
    position: fixed;
    top: 0;
    left: 0;
`

const Title = styled.span`
    font: 39px 'Playball', cursive;
    color: #FFF;
`

const ProfileImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%
`
