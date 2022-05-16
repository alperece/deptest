import logo from './logo.svg';
import './App.css';

import Comp from './components/comp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HALLLOOOOOO <Comp/>
        </p>

      </header>
    </div>
  );
}

export default App;
