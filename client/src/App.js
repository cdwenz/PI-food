import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Landing from './components/Landing/landing';
import Nav from './components/Nav';
import Detail from './components/Detail';
import Home from './components/Home/home';

function App() {
  return (
    <>
      <Route exact path="/" component={Landing}/>
      <Nav />
      <Route path="/detail" component={Detail}/>
      <Route path="/home" component={Home}/>
      
    </>
  );
}

export default App;
