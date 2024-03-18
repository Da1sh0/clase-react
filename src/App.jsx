import logo from './componentes/styles/image/mapahce.jpg';

import ComponentA from './componentes/componenteA';
import ComponentB from './componentes/componenteB';
import ComponentC from './componentes/componenteC';
import ComProps from './componentes/comProps';
import ComState from './componentes/comState';
import ComponentD from './componentes/ComponentD';

function App() {
  const skills =['PHP',' - ','JavaScript',' - ','CSS',' - ','HTML', ' - ','SQL']
  return ( 
    <ComponentD programa={'Analisis y Desarrollo de Software'} skills={skills}></ComponentD>
   );
}
export default App;