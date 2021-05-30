import './App.css';
import Header from './Header';
import { Switch, Route } from 'react-router-dom'
import Home from './Page/Home'
import Section from './Page/Section';
import Get_Involved from './Page/Get_Involved';
import About from './Page/About';
// import '../node_modules/bootstrap/dist/css/bootstrap.main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/section' component={Section}></Route>
        <Route exact path='/getinvolved' component={Get_Involved}></Route>
        <Route exact path='/about' component={About}></Route>
      </Switch>
    </div>
  );
}

export default App;
