import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginPage from './LoginPage'

export default function App() {
    return(
       <BrowserRouter>
            <Switch>
                <Route>
                    <LoginPage path="/" exact/>
                </Route>
            </Switch>
       </BrowserRouter>
    )
}