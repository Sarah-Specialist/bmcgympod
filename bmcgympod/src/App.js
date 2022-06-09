import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HowTo from './pages/HowTo';
import GetStarted from './pages/GetStarted';
import BookAppointment from './pages/BookAppointment';
import AccessPod from './pages/AccessPod';
import GetFit from './pages/GetFit';
import EndSession from './pages/EndSession';
import SaveMoney from './pages/SaveMoney';
import Promotions from './pages/Promotions';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {

  const [menu, setMenu] = useState(false)

  function handleMouseOver() {
    setMenu(true)

    setTimeout(function() {
      setMenu(false)
    }, 4000);
  }

  return (
    <div className="App">
      <Header />
        <Router>
          <nav className="navbar">
            <Link to="/home" style={{textDecoration: "none"}} className="pages">Home</Link>
            <Link to="/about" style={{textDecoration: "none"}} className="pages">About us</Link>
            <Link to="/how-to" style={{textDecoration: "none"}} className="pages" onMouseOver={handleMouseOver}>How to</Link>
            <Link to="/promotions" style={{textDecoration: "none"}} className="pages">Promotions</Link>
            <Link to="/blog" style={{textDecoration: "none"}} className="pages">Blog</Link>
            <Link to="/contact" style={{textDecoration: "none"}} className="pages">Contact us</Link>
          </nav>
          <nav className={menu ? "subnav active" : "subnav"}>
            <p>
              <Link to="/get-started" style={{textDecoration: "none"}} className="sub-pages">Get Started</Link>
            </p>
            <p>
              <Link to="/book-appointment" style={{textDecoration: "none"}} className="sub-pages">Book an appointment</Link>
            </p>
            <p>
              <Link to="/access-pod" style={{textDecoration: "none"}} className="sub-pages">Access the pod</Link>
            </p>
            <p>
              <Link to="/get-fit" style={{textDecoration: "none"}} className="sub-pages">Get Fit</Link>
            </p>
            <p>
              <Link to="/end-session" style={{textDecoration: "none"}} className="sub-pages">End session</Link>
            </p>
            <p>
              <Link to="/save-money" style={{textDecoration: "none"}} className="sub-pages">Save Money</Link>
            </p>
          </nav>
          <div className="main-app">         
            <Switch>
              <Route path="/home"><Home /></Route>
              <Route path="/about"><About /></Route>
              <Route path="/how-to"><HowTo /></Route>
                <Route path="/get-started"><GetStarted /></Route>
                <Route path="/book-appointment"><BookAppointment /></Route>
                <Route path="/access-pod"><AccessPod /></Route>
                <Route path="/get-fit"><GetFit /></Route>
                <Route path="/end-session"><EndSession /></Route>
                <Route path="/save-money"><SaveMoney /></Route>
              <Route path="/promotions"><Promotions /></Route>
              <Route path="/blog"><Blog /></Route>
              <Route path="/contact"><Contact /></Route>
              <Redirect from="/" to="/home" />
            </Switch>
          </div>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
