import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import {Link} from 'react-router-dom';
class StreamList extends Component {
   
    componentDidMount(){
        this.props.fetchStreams()
    }

    renderAdmin(stream){
        if(stream.userId === this.currentUserId){
            return(
                <div className="right floated content">
                 <button className="ui button primary">
                 EDIT
                 </button>
                 <button className="ui button negative">
                 DELETE
                 </button>
                </div>
            );
        }
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                    Create Stream
                    </Link>
                </div>
            );
        }
    }

    renderList(){
        const streams = this.props.streams.map(strim => {
            return(
                <div className="item" key={strim.id}>
                <i className="large middle aligned icon camera" />
                <div className="content">
                 <h3>{strim.title}</h3>
                 <div className="description">
                    <p>{strim.description}</p>
                 </div>
                 {this.renderAdmin(strim)}
                </div>
                </div>
            );
        });
        return streams;
    }
    render() { 
        console.log(this.props.streams)
        return ( 
            <div>
              <h1>Lista Strimova</h1>
             
                 <div className="ui celled list">
                    {this.renderList()}
                 </div>
                  {this.renderCreate()}
            </div>
         );
    }

   
}
 
const mapStateToProps = state => {
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);