import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Today from './pages/Today/Today';
import Habits from './pages/Habits/Habits';
import History from './pages/History';

import UserContext from './contexts/UserContext';
import CountContext from './contexts/CountContext';
import ProgressContext from './contexts/ProgressContext';

export default function App() {
    const [user, setUser] = useState("")
    const [progress, setProgress] = useState(0)
    const [count, setCount] = useState(0)  

  return(
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
      <CountContext.Provider value={{count, setCount}}>
      <ProgressContext.Provider value={{progress, setProgress}}>
        <Switch>
          <Route path="/" exact >
            <Login setUser={setUser} validEmail={validEmail}/>
          </Route>
          <Route path="/cadastro" exact >
            <SignUp validURL={validURL} validEmail={validEmail}/>
          </Route>
          <Route path="/hoje" component={Today} exact />
          <Route path="/habitos" component={Habits} exact />
          <Route path="/historico" component={History} exact/>
        </Switch>
      </ProgressContext.Provider>
      </CountContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

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