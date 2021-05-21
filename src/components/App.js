import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import GlobalStyle from '../globalStyles'
import UserContext from '../contexts/UserContext';
import CountContext from '../contexts/CountContext';
import ProgressContext from '../contexts/ProgressContext';
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import TodayPage from './TodayPage/TodayPage'
import HabitsPage from './HabitsPage/HabitsPage'
import HistoryPage from './HistoryPage/HistoryPage'

export default function App() {
    const userSerialized = localStorage.getItem("User")
    const userDeserialized = JSON.parse(userSerialized)
    const [user, setUser] = useState("")
    const [progress, setProgress] = useState(0)
    const [count, setCount] = useState(0)

    useEffect( () => {
        if(userDeserialized !== ""){
            setUser(userDeserialized)
        }
    },[])

    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    function validEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return(
       <BrowserRouter>
            <GlobalStyle/>
            <UserContext.Provider value={{user, setUser}}>
            <CountContext.Provider value={{count, setCount}}>
            <ProgressContext.Provider value={{progress, setProgress}}>
                <Switch>
                    <Route path="/" exact={true}>
                        <LoginPage setUser={setUser} validEmail={validEmail}/>
                    </Route>
                    <Route path="/cadastro" exact={true}>
                        <SignUpPage validURL={validURL} validEmail={validEmail}/>
                    </Route>
                    <Route path="/hoje" exact={true}>
                        <TodayPage />
                    </Route>
                    <Route path="/habitos" exact={true}>
                        <HabitsPage />
                    </Route>
                    <Route path="/historico" exact={true}>
                        <HistoryPage />
                    </Route>
                </Switch>
            </ProgressContext.Provider>
            </CountContext.Provider>
            </UserContext.Provider>
       </BrowserRouter>
    )
}