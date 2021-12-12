/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const NavigationView = ({
  nodeid, eyeColor, hairColor, skinColor, birthYear, vehicles,
}) => (
  <Route exact path={`/${nodeid}`}>
    <div className="view_main_containter">
      <div className="view_top_container">
        <h1>General Information</h1>
        <div className="view_element">
          <h2 className="view_element_">Eye Color</h2>
          <h2>{eyeColor}</h2>
        </div>
        <div>
          <h2>Hair Color</h2>
          <h2>{hairColor}</h2>
        </div>
        <div>
          <h2>Skin Color</h2>
          <h2>{skinColor}</h2>
        </div>
        <div>
          <h2>Birth Year</h2>
          <h2>{birthYear}</h2>
        </div>
      </div>
      <div>
        <h1>Vehicles</h1>
        {vehicles.map(({ name, id }) => (
          <div key={id}>
            <h2>{name}</h2>
          </div>
        ))}
      </div>
    </div>
  </Route>
);

NavigationView.propTypes = {
  nodeid: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  skinColor: PropTypes.string.isRequired,
  birthYear: PropTypes.string.isRequired,
  vehicles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavigationView;
