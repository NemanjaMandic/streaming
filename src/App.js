import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
  return <div>Pehd One</div>
}

const PageTwo = () => {
  return (
  <div>
    <p>Pejdz Two</p>
    <button>Click Me!</button>
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
