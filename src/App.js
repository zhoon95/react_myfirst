import logo from './logo.svg';
import './App.css';
import './Welcom';
import Welcome from './Welcom';


function App() {
  return (
    <div>
      <Welcome name="Mike" />
      <Welcome name="Steve" />
      <Welcome name="James" />
    </div>
  );
}

export default App;
