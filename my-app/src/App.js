import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import P from './components/P'

class App extends Component {
  state = {
    titulo: 'Bienvenido a React'
  }
  cambiarTextoDelEstado = () => {
    this.setState({titulo:'Hola Mundo'})
  } 
  manejaClick = texto => {
    console.log(texto)
  }
  render (){
    const {titulo} = this.state
    const texto = 'Bienvenido a React'
    return (
      <div className="App">
        <Header titulo={titulo} manejaClick={this.manejaClick}/>
        {/* /*  Children va a ser todo lo que yo escriba dentro de las etiquetas P */}
        <P onClick={this.cambiarTextoDelEstado}>
          {titulo}
        </P>
      </div>
    )
  };
}

export default App;
