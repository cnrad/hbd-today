import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bday from "./pages/Bday";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";

function App() {
  return(

    <Router>
      <Switch> 
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/bday' component={Bday}></Route>
        <Route exact path='/*' component={PageNotFound}></Route>
      </Switch>
    </Router>

  )
}

export default App;
