import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div className="screen">
        <div className="profile">
          <img className="float-left" src={user.avatar_url} alt="Profile pic" />
          <div className="float-right">
            <h1 className="noMargin">
              <a href={user.html_url} target="_blank">
                {user.name}
              </a>
            </h1>
            <p className="noMargin opacity">{user.login}</p>
            <p className="noMargin">
              <i className="fa fa-map-marker">{user.location}</i>
            </p>
            <p>
              <strong>Company: </strong>
              {user.company}
            </p>
            <p>
              <strong>Blog: </strong>
              <a href={user.blog}>{user.blog}</a>
            </p>

            <p>
              <strong>Followers: </strong>
              <a href={user.followers_url} target="_blank">
                {user.followers}
              </a>
              <strong>Following: </strong>
              <a href={user.following_url} target="_blank">
                {user.following}
              </a>
            </p>
            <p>
              <strong>Repos: </strong>
              <a href={user.repos_url} target="_blank">
                {user.public_repos}
              </a>
              <strong>Gists: </strong>
              <a href={user.gist_url} target="_blank">
                {user.public_gists}
              </a>
            </p>
            <p>
              <strong>Bio: </strong>
              {user.bio === null ? null : user.bio}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
