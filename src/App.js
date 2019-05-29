import React from 'react';
import { Router, Route} from 'react-router-dom';
import {StreamCreate, StreamDelete, StreamEdit, StreamList, StreamShow} from './components/streams';
import Header from './components/Header';
import history from './history';

const App = () => {
  
    return (
      <div className="ui container">
       
       <Router history={history}>
       <>
       <Header />
         <Route path="/" exact component={StreamList} />
         <Route path="/streams/new" component={StreamCreate} />
         <Route path="/streams/delete" component={StreamDelete} />
         <Route path="/stream/edit" component={StreamEdit} />
         <Route path="/streams/show" component={StreamShow} />
         </>
       </Router>
       
      </div>
    );
    
}

export default App;
