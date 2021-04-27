import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContextProvider from './components/ContextProvider/ContextProvider'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import Cv from './components/CV/PageHome/CV'
import PageParticles from "./components/PageParticles/PageParticles";

// const styles = {
//   root: {
//     fontFamily: "sans-serif",
//     textAlign: "center",
//     height: "100%",
//     background: "#222",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   }
// };
{/* <Route path="/particles" component={PageParticles}/> */}
function App() {
  return (

       
        <ContextProvider>
          <BrowserRouter>

          <PageParticles />
       
            <Switch>
       
              <Route path="/" exact component={HomePage}/>
              <Route path="/cv" component={Cv}/>
              
               
            </Switch>
           
    
          </BrowserRouter>
      </ContextProvider>

  );
}

export default App;
