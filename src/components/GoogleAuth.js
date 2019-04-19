import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = { 
        isSignedIn: null
     }

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '482508813179-b9icvm3cp6mt3s344oi0le1a75i22ldv.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        });
    };

    signOut = () => {
        this.setState({
            isSignedIn: this.auth.signOut()
        })
    }

    signIn = () => {
        this.setState({
            isSignedIn: this.auth.signIn()
        })
     
    }
    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;
        }else if(this.state.isSignedIn){
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
 
export default GoogleAuth;