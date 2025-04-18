import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/juego" component={Juego} />
      </Switch>
    </Router>
  );
}

export default App;
