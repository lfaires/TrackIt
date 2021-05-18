import {BrowserRouter, Switch, Route} from 'react-router-dom'
import GlobalStyle from './globalStyles'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import TodayPage from './TodayPage'

export default function App() {
    return(
       <BrowserRouter>
            <GlobalStyle/>
            <Switch>
                <Route path="/" exact={true}>
                    <LoginPage />
                </Route>
                <Route path="/cadastro" exact={true}>
                    <SignUpPage />
                </Route>
                <Route path="/hoje" exact={true}>
                    <TodayPage />
                </Route>
            </Switch>
       </BrowserRouter>
    )
}