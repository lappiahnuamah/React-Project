import React, { Component } from 'react';

class Profile extends Component  {
  
  componentDidMount () {
    let header = new Headers({"Content-Type": "application/json","Authoriztion":"token  719bd0dc90b6f6d6cc03a3f61d43f258f3fdec2a"});
    fetch('https://api.github.com/users/lappiahnuamah', {
      method: 'GET',
      headers : header
    })
    .then(response => response.json())
    .then(json => {
       console.log(json)
    })
    .catch(error => console.log(error));

  }

  render() {
 
  return (
    <div>
        <p>The Profile goes here</p>
    </div>
  );
}
}
export default Profile;
