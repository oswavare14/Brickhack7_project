import Client from './components/Client'
import employee from './components/Employee'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Client} />
          <Route path="/admin" component={employee} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
