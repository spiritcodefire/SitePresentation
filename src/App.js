import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContextProvider from './components/ContextProvider/ContextProvider'
import './App.css'
// import HomePage from './components/HomePage/HomePage'
import Cv from './components/CV/PageHome/CV'


function App() {
  return (
      <ContextProvider>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" exact component={HomePage}/> */}
            <Route path="/cv" component={Cv}/>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
  );
}

export default App;
