import logo from './logo.svg';
import './App.css';

//Importo los componentes para que se rendericen 
import ComponentShowPersonas from './persona/ShowPersonas';
import ComponentCreatePersona from './persona/CreatePersona';
import ComponentEditPersona from './persona/ModifyPersona';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ComponentShowPersonas/>}></Route>
          <Route path='/create' element={<ComponentCreatePersona/>}></Route>
          <Route path='/edit/:id' element={<ComponentEditPersona/>}></Route>
          

            
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
