import './App.css';
import NavBar from './components/navbar' 
import { React } from 'react';
import Shopping from './components/shopping'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
       <div className='shopping'>
        <Shopping price={170} discount={10}/>
       </div>
      </header>
    </div>
  );
}

export default App;
