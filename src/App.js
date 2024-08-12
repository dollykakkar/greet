import logo from './logo.svg';
import './App.css';
import Design from './Components/Design';
import { greetings } from './Components/GreetingList';
import {BrowserRouter as Router ,Route,Routes,Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Design data={greetings}/>
      {/* <Router>
        <Routes>
          <Route to='/getWishes' element=<Design data={greetings}/>/>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
