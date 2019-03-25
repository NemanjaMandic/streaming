import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const PageOne = () => {
  return <div>
    <h3>Page One</h3>
    <Link to="/page-two">Page Two</Link>
  </div>
}

const PageTwo = () => {
  return (
  <div>
    <h3>Page Two</h3>
    <Link to="/">Page One</Link>
  </div>
  );
}

const App = () => {
  
    return (
      <>
       <BrowserRouter>
         <Route path="/" exact component={PageOne} />
         <Route path="/page-two" component={PageTwo} />
       </BrowserRouter>
      </>
    );
  
}

export default App;
