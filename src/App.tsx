import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bday from "./pages/Bday";
import Home from "./pages/Home";

function App() {
  return(
    <Router>
      <Switch> 
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/bday' component={Bday}></Route>
      </Switch>
    </Router>
  )
}

export default App;
