import React from 'react'
import logo from './logo.svg';
import './App.css';
import Encabezado from './componentes/Encabezado';
import Contenido from './componentes/Contenido';


class App extends React.Component {

  /* render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    ); */

    render(){
      return (
        <div className="App">
        <div className="container mt-3">
          <div className="jumbotron">
            <h1>Ejercicio 1 React.JS</h1>
            <hr />
 
            <div><Encabezado titulo='Encabezado stateless'/>

            </div>
            <div>
              <Contenido texto='Texto enviado al componente Contenido' colorId={1} />
            </div>


          </div>
        </div>
      </div>
      );
  }
  
}

export default App;
