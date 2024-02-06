import Nav from './components/Nav'
import './App.css';

import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light-mode')
  
  function handleClick (){
    setTheme(theme ? 'lightmode' : 'darkmode')
  }


  return (
    <div>
      <Nav OnClick={handleClick}/>
    </div>
  );
}

export default App;
