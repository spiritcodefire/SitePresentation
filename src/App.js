import React from 'react'
import './App.css'
import Header from './components/Header/Header'
// import SectionImage from './components/SectionImage/SectionImage'

// ici c'est une fonction enrichi le header

function App() {
  return (
    <div className="text-center">
        <Header title='SpirithaCodech.com'/>
        {/* <SectionImage/> */}
        
    </div>
  );
}

export default App;
