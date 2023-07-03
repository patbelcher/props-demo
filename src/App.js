import Greeting from './components/Greeting';

import './App.css';

const flintstones = ['Fred', 'Barney', 'Wilma', 'Dino', 'Betty', 'Bam-Bam', 
                      'Pebbles', 'Mr.Slate']


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meet The Flintstones</h1>
      {flintstones.map(flintstone => <Greeting key={flintstone} name={flintstone} />)}
      </header>
    </div>
  );
}

export default App;
