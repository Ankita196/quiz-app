import React from "react";
import "./style.css";
import Homepage from "./Homepage"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default function App() {
  return (
    <div>
     <BrowserRouter>
      
      <Switch>
      <Route  exact path='/'> <Homepage /> </Route>
      {/* <Route path="/quiz" component={Quiz} /> 
      */}
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}
