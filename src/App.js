import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/Not Found/NotFound';
import Feature from './components/Feature/Feature';
import OurServices from './components/OurServices/OurServices';
import About from './components/About/About';
import OurCard from './components/OurCard/OurCard';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Card></Card>
            <footer className="text-muted text-center mt-5">© 2021 All Rights Reserved.<br /> Developed By Khalid
            </footer>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Card></Card>
            <footer className="text-muted text-center mt-5">© 2021 All Rights Reserved.<br /> Developed By Khalid
            </footer>
          </Route>
          <Route path="/about">
            <Header></Header>
            <About></About>
            <footer className="text-muted text-center mt-5">© 2021 All Rights Reserved.<br /> Developed By Khalid
            </footer>
          </Route>
          <Route path="/service">
            <Header></Header>
            <OurCard></OurCard>
            <footer className="text-muted text-center mt-5">© 2021 All Rights Reserved.<br /> Developed By Khalid
            </footer>
          </Route>
          <Route path="/feature">
            <Header></Header>
            <Feature></Feature>
            <footer className="text-muted text-center mt-5">© 2021 All Rights Reserved.<br /> Developed By Khalid
            </footer>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
