import './App.css';

import Nav from './components/Nav'
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light-mode')

  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;
