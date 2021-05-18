import {BrowserRouter, Switch, Route} from 'react-router-dom'
import GlobalStyle from './globalStyles'
import LoginPage from './LoginPage'

export default function App() {
    return(
       <BrowserRouter>
            <GlobalStyle/>
            <Switch>
                <Route>
                    <LoginPage path="/" exact/>
                </Route>
            </Switch>
       </BrowserRouter>
    )
}