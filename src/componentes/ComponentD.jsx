import logo from './styles/image/mapahce.jpg';
<<<<<<< HEAD
import logo2 from './styles/image/mapahce2.jpg';
import logo3 from './styles/image/mapahce3.jpeg';
import cinta from './styles/image/cinta.png'
import './styles/styles.css';

import React, { useState } from 'react';

const ComponentD = (props) => {
    const [state] = useState({ nombre: 'Diiego', nombre2: 'Fernando', apellido: 'Camiino', apellido2: 'Rodriiguez' });

    return (
        <div className='tablero'>
            <div className="carta">
                <div className='contenido'>
                    <img className='cinta' src={cinta} alt="" />
                    <div>
                        <h2>Nombre: {state.nombre} {state.nombre2} {state.apellido} {state.apellido2}</h2>
                    </div>
                    <div>
                        <img className='mapache' src={logo} alt="Machape" />
                    </div>
                </div>
            </div>
            <div className="carta">
                <div className='contenido'>
                    <img className='cinta' src={cinta} alt="" />
                    <div>
                        <h2>Estudiante de: {props.programa}</h2>
                    </div>
                    <div>
                        <img className='mapache' src={logo2} alt="Machape" />
                    </div>
                </div>
            </div>
            <div className="carta">
                <div className='contenido'>
                    <img className='cinta' src={cinta} alt="" />
                    <div>
                        <h2>Con conocimientos en: {props.skills}</h2>
                    </div>
                    <div>
                        <img className='mapache' src={logo3} alt="Machape" />
                    </div>
                </div>
            </div>
        </div>
    );
};

=======
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
 
>>>>>>> dda15abab6d23cc4710b562c4ba3a03106d189c4
export default ComponentD;