import logo from './logo.svg';
import './App.css';

import Comp from './components/comp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          test react123 <Comp/>
        </p>

      </header>
    </div>
  );
}

export default App;
