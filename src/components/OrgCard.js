import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Container from './Container';

const OrgCard = props => {
  return (
    <div className='orgcard-container'>
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <img src={props.avatar_url} alt="" />
        </Grid>
        <Grid item xs={9}>
          <h2>{props.login}</h2>
          <Container title="ID" link="" data={props.id} />
          <Container title="Description" link="" data={props.desc} />
        </Grid>
      </Grid>
    </div>
  );
};

OrgCard.propTypes = {
  login: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  desc: PropTypes.string,
  avatar_url: PropTypes.string
};

export default OrgCard;
