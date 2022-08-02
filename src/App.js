import logo from './logo.png';
import './App.css';
import Designers from './components/designers/index.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <h1>Black Lotus Coalition</h1>
        </p>
      </header>
			<body>
				<Designers />
			</body>
    </div>
  );
}

export default App;
