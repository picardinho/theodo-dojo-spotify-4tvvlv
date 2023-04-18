import logo from './assets/logo.svg';
import './App.css';
<audio src={trackUrls[1]} autoPlay controls />

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">la kiffance</h1>
      </header>
      <div className="App-images">
        <p>Il va falloir modifier le code pour faire un vrai blind test !</p>
      </div>
      <div className="App-buttons"></div>
    </div>
    
  );
};

export default App;
