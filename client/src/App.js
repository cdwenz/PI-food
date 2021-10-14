import React, {useEffect} from 'react';
import { Route } from 'react-router';
import Nav from './components/Nav';
import Home from './components/Home/home';
import Bottom from './components/Bottom/Bottom'
import Search from './components/Search';
import Detail from './components/Detail';
import Landing from './components/Landing/landing';
import RecipeCreate from './components/RecipeCreate';
import { useDispatch } from 'react-redux';
import { getAllRecipes, getDiets } from './Dispatch/actions';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllRecipes());
    dispatch(getDiets());
  },[dispatch])

  return (
    <div className={styles.app}>
      
      <Route exact path="/" component={Landing}/>
      <Route path="/:algo" component={Nav}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/home/:id" component={Detail}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/search/:name" component={Search}/>
      <Route exact path="/recipeCreate" component={RecipeCreate}/>
      <Route path="/:algo" component={Bottom}/>
   
    </div>
  );
}

export default App;
