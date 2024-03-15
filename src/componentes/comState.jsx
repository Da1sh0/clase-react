import React, { Component } from 'react';

class ComState extends Component {
    constructor(props) {
        super(props);
    }
    state = { programa: 'ADSO', ficha: 2672364 }
    render() { 
        return ( 
            <div className='ficha'>
                <h1>Programa de formacio: {this.state.programa}</h1>
                <h2>Ficha del programa: {this.state.ficha}</h2>
            </div>
         );
    }
}
 
export default ComState;