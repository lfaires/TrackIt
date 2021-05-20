import { useContext } from 'react'
import UserContext from './contexts/UserContext';
import styled from 'styled-components'

export default function Header() {
    const { user } = useContext(UserContext)

    return (
        <Head>
            <Title>TrackIt</Title>
            <ProfileImg src={user.image}/>
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
