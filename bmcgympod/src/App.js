import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HowTo from './pages/HowTo';
import Promotions from './pages/Promotions';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <nav className="navbar">
            <Link to="/home" style={{textDecoration: "none"}} className="pages">Home</Link>
            <Link to="/about" style={{textDecoration: "none"}} className="pages">About us</Link>
            <Link to="/how-to" style={{textDecoration: "none"}} className="pages">How to</Link>
            <Link to="/promotions" style={{textDecoration: "none"}} className="pages">Promotions</Link>
            <Link to="/blog" style={{textDecoration: "none"}} className="pages">Blog</Link>
            <Link to="/contact" style={{textDecoration: "none"}} className="pages">Contact us</Link>
          </nav>
          <div className="main-app">         
            <Switch>
              <Route path="/home"><Home /></Route>
              <Route path="/about"><About /></Route>
              <Route path="/how-to"><HowTo /></Route>
              <Route path="/promotions"><Promotions /></Route>
              <Route path="/blog"><Blog /></Route>
              <Route path="/contact"><Contact /></Route>
              <Redirect from="/" to="/home" />
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
