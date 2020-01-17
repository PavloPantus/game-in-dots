import React from 'react';
import PropTypes from 'prop-types';

export const Leader = ({ leader }) => (
  <div className="leader">
    <span className="leader__name">{leader.winner}</span>
    <span className="leader__date">{leader.date}</span>
  </div>
);

Leader.propTypes = {
  leader: PropTypes.shape({
    winner: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};
