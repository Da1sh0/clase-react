import logo from './styles/image/mapahce.jpg';
import cinta from './styles/image/cinta.png'
import './styles/styles.css';

import React, { Component } from 'react';

class ComponentD extends Component {
    constructor(props) {
        super(props);
    }
    state = { nombre:'Diiego', apellido:'Camiino'}
    render() { 
        return ( 
        <div className="carta">
            <div className='contenido'>
                <img className='cinta' src={cinta} alt="" />
                <div>
                    <h1>Nombre: {this.state.nombre} {this.state.apellido}</h1>
                    <h2>Estudiante de: {this.props.programa}</h2>
                </div>
                <div>
                    <img className='mapache' src={logo} alt="Machape" />
                </div>
            </div>
        </div> 
    );
    }
}
 
export default ComponentD;