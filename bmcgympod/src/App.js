import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <nav className="navbar">
            <Link to="/" style={{textDecoration: "none"}} className="pages">About us</Link>
            <Link to="/" style={{textDecoration: "none"}} className="pages">How to</Link>
            <Link to="/" style={{textDecoration: "none"}} className="pages">Promotions</Link>
            <Link to="/" style={{textDecoration: "none"}} className="pages">Blog</Link>
            <Link to="/" style={{textDecoration: "none"}} className="pages">Contact us</Link>
          </nav>
          <div className="main-app">         
            <Switch>
              <Route></Route>

            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
