import React from 'react';
import Header from './Header';
import About from './About';
import Homepage from './Homepage';
import ItemDetails from './ItemDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App(props) {
  return (
  <Router>
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route path='/items/:itemId'>
          <ItemDetails />
        </Route>
        <Route path='/'>
          <Homepage />  
        </Route>
      </Switch>
    </div>
  </Router>
  );
}



export default App;
