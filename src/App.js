import NavBar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h3 align="center"> React Material UI Demo</h3>
      
      <Router>
        <NavBar/>
      </Router>
      

    </div>
  );
}

export default App;
