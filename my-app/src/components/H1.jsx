import React, {Component} from 'react';

class H1 extends Component {
    render(){
        return(
            <h1{...this.props}/>
        )
    }
};

export default H1