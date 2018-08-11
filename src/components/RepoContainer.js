import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const RepoContainer = (props) => {
  return (
    <div>
      <Card>
        <CardContent className="card">
          <h3>{props.name}</h3>
          <p style={{ fontSize: '13px' }}>{props.desc}</p>
          <div className="flex-container">
            <p>{props.language}</p>
            <p>
              <img className="small-image" src={require('../assets/star-24px.svg')} alt=''/>
              {props.starCount}
            </p>
            <p>{props.forkCount}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

RepoContainer.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  language: PropTypes.string,
  starCount: PropTypes.number.isRequired,
  forkCount: PropTypes.number.isRequired
}

export default RepoContainer;