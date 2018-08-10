import React, { Component } from 'react';

class Profile extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        Profile
      </div>
    );
  }
}

export default Profile;