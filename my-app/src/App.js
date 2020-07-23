import React, { Component } from 'react';
// import FormularioSimple from './components/FormularioSimple'

class App extends Component {
  constructor(){
    super()
    //GET
    // fetch('https://jsonplaceholder.typicode.com/users')
    //parseo
    // .then(x => x.json())
    // .then(x => )

    //POST
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      //Ademas de aclarar que el metodo a utilizar es POST, tenemos que aclar que es un JSON
      headers: {
        'Content-Type': 'application/json'
      },
      //Despues le tenemos que indicar es lo que le vamos a enviar como datos al servidor, fetch no sabe como interpretar un objeto dentro de body por eso no se lo podemos pasar sencillamente... por eso tenemos que indicarle que el cuerpo del mensaje va a ser un JSON.stringify lo convierto en un string
      body: JSON.stringify({
        name: 'Jose Rosales',
        username: 'Joui'
      })
    })
    .then(x => x.json())
    .then(x => console.log(x))
  }
  render (){
    return (
      <div className="App">
        {/* <FormularioSimple/> */}
      </div>
    )
  };
}

export default App;
