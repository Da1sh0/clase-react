import React, { Component } from 'react';
import logo from './styles/image/mapahce.jpg';

class ComponentA extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className="carta">
                <div className='contenido'>
                    <div>
                        <h1>Diego Camino</h1>
                        <h2>Estudiante de Analisis y Desarrollo de Software</h2>
                    </div>
                    <div>
                        <img src={logo} alt="Machape" />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ComponentA;