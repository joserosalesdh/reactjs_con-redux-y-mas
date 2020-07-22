import React, {Component} from 'react';
import P from './P'

const validate = values => {
    const errors = {}
    if (!values.nombre){
       errors.nombre = 'Este campo es obligatorio' 
    }
    if (!values.apellido){
        errors.apellido = 'Este campo es obligatorio' 
     }
    return errors
}
class FormularioSimple extends Component {
    state = {
        erros:{}
    }
    //target hace referencia al mismo elemto de html que nosotros estamos manipulando 
    handleChange = ({target}) => {
        const {name, value} = target
        this.setState({[name]: value})
    }
    //Con este metodo de handleSubmit prevenimos de que la pagina se refresque
    handleSubmit = e => {
        e.preventDefailt()
        //Lo que hago aca es definir una const que va a se rlos errores que e sla que tenemos en el estado y para todo el resto de las propiedades que tenga el objeto (que en este caso es state) asignasela a un unico obketo que se va a llamar sinErrors
        const {errors, ...sinErrors} = this.state
        //validate es una funcion que creo que le vamos a pasar todos los valores que contiene el estado y sin embargo el estadp tambien contiene un mensaje de error
        const result = validate(sinErrors)
        // Lo que me retorne validate va a se run objeto que va a contener todos los errores que contiene el formulario
        //  Hago un if para ver si es que result, que contiene los errores del formulario, viene con al menos una propiedad y en este caso no tengo que enviar el formulario
        // El lenght es para indicar que si hay por lo menos un error, seteame el error
        
        this.setState({errors: result})

        if (Object.keys(result).length){
            //Enviar el formulario!!!
            console.log('formulario valido')

            //Hago una funcion para limpar el form cuando es valido, esta funcion lo que va a ser es elimir todos los valores que se encuentran en el formulario
            e.target.reset()
        }
    }

    render(){
        const {errors} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="nombre" onChange={this.handleChange} />
                {/* si es que existe la propiedad de nombre (linea 6)... el && lo que hace e sque si existe el true de lo que se encuentra a la izq, entocne sretorna lo que se encuentra en la derecha y en este caso va a ser el componente de P con el mensaje de error */}
                {errors.nombre && <P>{errors.nombre}</P>}
                <input name="apellido" onChange={this.handleChange} />
                {errors.apellido && <P>{errors.apellido}</P>}
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}

export default FormularioSimple; 