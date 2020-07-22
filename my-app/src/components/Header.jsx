import React, { Component } from 'react';
import logo from '../logo.svg';
import H1 from './H1'

const styles = {
    header: ({backgroundColor}) => ({
        backgroundColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
    })
}
class Header extends Component {
    state = {
        backgroundColor: '#222'
    }
    cambiarColorHeader = () => {
        this.setState({backgroundColor: '#555'})
    }
    manejaClick = () => {
        const {titulo, manejaClick} = this.props
        manejaClick(titulo)
      }
    render(){
        //Es importante declarar las const al principio del render porque cuando yo quiero saber las propiedades que mi componente esta utilizando por convecion yo puedo ir a la primera linea del metodo render y yo imediatamente se cuales con las propiedades que mi componente esta utilizando
        const {titulo, manejaClick} = this.props;
        const {backgroundColor} = this.state
        return (
            <div>
                <header onClick={this.cambiarColorHeader} style={styles.header({backgroundColor})}>
                    <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo" />
                    <H1>{titulo}</H1>
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
