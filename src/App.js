import React from "react";
import "./style.css";
import Homepage from "./Homepage"
import Quiz from "./quiz"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default function App() {
  return (
    <div>
     <BrowserRouter>
    
      <Switch>
      <Route  exact path='/'> <Homepage /> </Route>
       <Route path="/easy"  ><Quiz /> </Route>
       <Route path="/medium"  ><Quiz /> </Route> 
       <Route path="/difficult"  ><Quiz /> </Route>
     
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}
