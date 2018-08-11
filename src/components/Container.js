import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) => {
  if (props.link === '') {
    return (
      <p>
        <strong>{props.title}: </strong>
        {props.data}
      </p>
    )
  }
  return (
    <p>
      <strong>{props.title}: </strong>
      <a href={props.link} target='_blank'>{props.data}</a>
    </p>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  data: PropTypes.any
};

export default Container;