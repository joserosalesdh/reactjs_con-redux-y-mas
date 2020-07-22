import React, {Component} from 'react'

class P extends Component {
    render(){
        //Children es todo lo que colocamos dentro de las etiquetas jsx
        // const {children} = this.props
        return (
            <div>
                {/* ...this.props va a pasar todas las propiedades de childre, onClick, etc. */}
                <p {...this.props}/>
            </div>
        )
    }
    
}

export default P
