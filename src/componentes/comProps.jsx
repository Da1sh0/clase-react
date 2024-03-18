import React, { Component } from 'react';

class ComProps extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='ficha'>
                <h1>ADSO {this.props.ficha} Programadores Senior</h1>
                <h2>Prueba con varias etiquetas</h2>
                <h3>Estamos aprendiendo React</h3>
                <h4>Puedo anexar una lista: {this.props.lista}</h4>
            </div>
         );
    }
}
 
export default ComProps;