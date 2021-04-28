import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Detail from './Pages/Detail/Detail';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/detail/:id" exact component={Detail}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
