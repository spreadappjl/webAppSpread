import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SideBar from './widgets/SideBar';
import Events from './pages/Events';
import EventsDetails from './pages/Events-datails';
import Header from './widgets/Header';
import '../src/App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <SideBar/>
        <main className="main-component">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/events" component={Events}></Route>
              <Route exact path="/events/id" component={EventsDetails}></Route>
            </Switch>
          </BrowserRouter>
        </main>
    </div>
  );
}

export default App;