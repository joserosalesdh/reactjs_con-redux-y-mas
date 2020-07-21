import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    manejaClick = () => {
        const {titulo, manejaClick} = this.props
        manejaClick(titulo)
      }
    render(){
        //Es importante declarar las const al principio del render porque cuando yo quiero saber las propiedades que mi componente esta utilizando por convecion yo puedo ir a la primera linea del metodo render y yo imediatamente se cuales con las propiedades que mi componente esta utilizando
        const {titulo, manejaClick} = this.props
        return (
            <div>
                <header className="App-header">
                    <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo" />
                    <p>
                        {titulo}
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>   
            </div>
        )
    }
}

export default Header
