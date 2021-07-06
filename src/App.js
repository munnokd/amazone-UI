import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home'
import Checkout from './Checkout/Checkout'
import Login from './Login/Login'
import {useStateValue} from './StateProvider'
import { useEffect } from 'react';
import {auth} from './firebase.js'

function App() {
  const [{user},dispatch]=useStateValue();

  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
    return()=>{
      unsubscribe();
    }
  },[])
  console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Navbar/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Navbar/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
