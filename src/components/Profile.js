import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Container from './Container';

const Profile = props => {
  const { user } = props;

  return ( 
    <div className="data-container">
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <img src={user.avatar_url} alt="Profile pic" />
        </Grid>
        <Grid item xs={9}>
          <h1 className="noMargin">
            <a href={user.html_url} target="_blank">
              {user.name}
            </a>
          </h1>
          <p className="noMargin opacity">{user.login}</p>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <div>
                <Container title="ID" link="" data={user.id} />
                <Container title="Location" link="" data={user.location} />
                <Container title="Type" link="" data={user.type} />
                <Container title="Company" link="" data={user.company} />
                <Container title="Blog" link={user.blog} data={user.blog} />
                <Container title="Site Admin" link="" data={user.side_admin ? 'Yes' : 'No'} />
                <Container title="Bio" link="" data={user.bio} />
              </div>
            </Grid>
            <Grid className="data" item xs={6}>
              <Container title="Email" link="" data={user.email} />
              <Container title="Repositories" link={user.repos_url} data={user.public_repos} />
              <Container title="Gist" link='' data={user.public_gists} />
              <Container title="Followers" link={user.followers_url} data={user.followers} />
              <Container title="Following" link='' data={user.following} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired
}

export default Profile;
