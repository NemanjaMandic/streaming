import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';


const App = () => {
  
    return (
      <>
       <BrowserRouter>
         <Route path="/" exact component={StreamList} />
         <Route path="/streams/create" component={StreamCreate} />
         <Route path="/streams/delete" component={StreamDelete} />
         <Route path="/stream/edit" component={StreamEdit} />
         <Route path="/streams/show" component={StreamShow} />
       </BrowserRouter>
      </>
    );
  
}

export default App;
