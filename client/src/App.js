import React, {useEffect} from 'react';
import { Route } from 'react-router';
import './App.css';
import Landing from './components/Landing/landing';
import Nav from './components/Nav';
import Detail from './components/Detail';
import Home from './components/Home/home';
import RecipeCreate from './components/RecipeCreate';
import { useDispatch } from 'react-redux';
import { getAllRecipes } from './Back/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllRecipes())
    
  },[dispatch])

  return (
    <>
      <Route exact path="/" component={Landing}/>
      <Nav />
      <Route path="/home" component={Home}/>
      <Route path="/detail" component={Detail}/>
      <Route path="/recipeCreate" component={RecipeCreate}/>
      
    </>
  );
}

export default App;
