import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'

class App extends Component {
  manejaClick = texto => {
    console.log(texto)
  }
  render (){
    return (
      <div className="App">
        <Header titulo={'Bienvenido a React'}
        manejaClick={this.manejaClick}/>
      </div>
    )
  };
}

export default App;
