/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const NavigationView = ({
  nodeid, name, species, homeworld,
}) => (
  <Route exact path={`/${nodeid}`}>
    <div>
      {name}
      {' '}
      {species}
      {' from '}
      {homeworld}
    </div>
  </Route>
);

NavigationView.propTypes = {
  nodeid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
};

export default NavigationView;
