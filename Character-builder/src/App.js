import { useState } from 'react';
import './App.css';

function App() {
  const [someState, setSomeState] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Dudes</h1>
        <h3>Welcome to the Blog</h3>    
      </header>
    </div>
  );
}

export default App;
