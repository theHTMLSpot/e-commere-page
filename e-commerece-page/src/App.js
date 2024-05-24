import './App.css';
import NavBar from './components/navbar' 
import { React } from 'react';
import Shopping from './components/shopping'
import Images from './components/images'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
       <div className='shopping'>
       

        <Images />
        
        <Shopping price={200} discount={0}/>
       </div>
       
      </header>
    </div>
  );
}

export default App;
