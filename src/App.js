import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SideBar from './widgets/SideBar';
import Events from './pages/Events';

function App() {
  return (
    <div className="App">
      
      
      <SideBar/>
      <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/events" component={Events}></Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
