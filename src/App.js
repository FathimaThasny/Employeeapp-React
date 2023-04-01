// import logo from './logo.svg';
import './App.css';
// import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Employeeform } from './components/Employeeform';

function App() {
  return (
    <BrowserRouter basename='Employeeapp-React'> 
    <Routes>

      <Route  path='/' exact element={ <Dashboard/> }/>
      <Route path='/employeeform' exact element={ <Employeeform/> }/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
