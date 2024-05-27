import './App.css';
import NavBar from './components/navbar' 
import { React } from 'react';
import Shopping from './components/shopping'
import Images from './components/images'
import LightBox from './components/lightbox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
       <div className='shopping'>
       

        <Images />
        
        <Shopping price={170} discount={10}/>
       </div>
       
      </header>
    </div>
  );
}

export default App;
