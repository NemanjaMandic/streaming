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

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>Neam pojma bre</div>;
        }else if(this.state.isSignedIn){
            return <div>I am signed in</div>;
        }else{
            return <div>I am NOT signed in</div>
        }
    }
    render() { 
        return ( <div>{this.renderAuthButton()}</div> );
    }
}
 
export default GoogleAuth;