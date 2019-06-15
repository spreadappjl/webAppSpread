import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SideBar from './widgets/SideBar';
import Events from './pages/Events';
import EventsDetails from './pages/Events-datails';
import Header from './widgets/Header';
import '../src/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <SideBar />
          <main className="main-component">
            <Link to="/"></Link>
            <Link to="/home"></Link>
            <Link to="/events"></Link>
            <Link to="/events/id"></Link>
            <Route path="/" exact component={Home}></Route>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/events" exact component={Events}></Route>
            <Route path="/events/id" exact component={EventsDetails}></Route>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;