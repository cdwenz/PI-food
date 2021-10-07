import React, {useEffect} from 'react';
import { Route } from 'react-router';
import Landing from './components/Landing/landing';
import Nav from './components/Nav';
import Detail from './components/Detail';
import Home from './components/Home/home';
import RecipeCreate from './components/RecipeCreate';
import { useDispatch } from 'react-redux';
import { getAllRecipes } from './Dispatch/actions';
import Search from './components/Search';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllRecipes())
  },[dispatch])

  return (
    <div className={styles.app}>
      <Route exact path="/" component={Landing}/>
      <Nav />
      <Route exact path="/home" component={Home}/>
      <Route exact path="/home/:id" component={Detail}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/recipeCreate" component={RecipeCreate}/>
   
    </div>
  );
}

export default App;
