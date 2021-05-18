import {BrowserRouter, Switch, Route} from 'react-router-dom'
import GlobalStyle from './globalStyles'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'

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
            </Switch>
       </BrowserRouter>
    )
}