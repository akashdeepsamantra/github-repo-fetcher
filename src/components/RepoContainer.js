import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const RepoContainer = props => {
  return (
    <div className="card-style">
      <Card>
        <CardContent className="card">
          <a href={props.html_url} target='_blank'>
            <h3>{props.name}</h3>
          </a>
          <p style={{ fontSize: '13px' }}>{props.desc}</p>
          <div className="flex-container">
            <p>{props.language}</p>
            <p>
              <img
                className="small-image"
                src={require('../assets/star-24px.svg')}
                alt=""
              />
              {props.starCount}
            </p>
            <p>
              <img
                className="small-image"
                src={require('../assets/fork.png')}
                alt=""
              />
              {props.forkCount}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

RepoContainer.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  language: PropTypes.string,
  starCount: PropTypes.number.isRequired,
  forkCount: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired
};

export default RepoContainer;
