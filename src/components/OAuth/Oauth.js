import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import styled from 'styled-components';

const GoogleLoginWrapper = styled.div`
position: absolute;
right: 0;
top: 0;
margin-top: 10px;
margin-right: 120px;
`
export class App extends Component {

   responseGoogle = (response) => {
      console.log(response);
      console.log(response.profileObj) //This profileObj will show all the username, pw, and emails
  }

  render() {
    return (
      <GoogleLoginWrapper>
        <GoogleLogin 
          clientId = "222385458805-1nios27mmhr1c83nbpt48b5e0lkbdfhu.apps.googleusercontent.com"
        buttonText = "Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
      </GoogleLoginWrapper>
    )
  }
}

export default App
