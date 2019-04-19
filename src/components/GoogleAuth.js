import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
class GoogleAuth extends Component {
   

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '482508813179-b9icvm3cp6mt3s344oi0le1a75i22ldv.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    };

    signOut = () => {
       
           return this.auth.signOut();
      
    }

    signIn = () => {
           return this.auth.signIn();
     
    }
    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return(
                <button className="ui red google button" onClick={this.signOut}>
                <i className="google icon" />
                Sign Out
                </button>
            );
        }else{
            return(
              <button className="ui red google button" onClick={this.signIn}>
              <i className="google icon" />
                Sign In With Google
              </button>  
            );
        }
    }
    render() { 
        return ( <div>{this.renderAuthButton()}</div> );
    }
}
 
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
};

export default connect(
    mapStateToProps,
    {signIn, signOut}
)(GoogleAuth);