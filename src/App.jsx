
import './App.css';
import Detail from './components/Detail';
import Input from './components/Input';
import List from './components/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './components/SignIn';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Input/>
            <List/>
          </Route>
          <Route path="/sign">
            <SignIn/>
          </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
