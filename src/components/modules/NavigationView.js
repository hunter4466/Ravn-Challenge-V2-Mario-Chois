/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const NavigationView = ({
  nodeid, eyeColor, hairColor, skinColor, birthYear, vehicles,
}) => (
  <Route exact path={`/${nodeid}`}>
    <div className="view_main_containter">
      <div className="view_container">
        <h1 className="view_title">General Information</h1>
        <div className="view_element">
          <h2 className="view_element_indicator">Eye Color</h2>
          <h2 className="view_element_data">{eyeColor}</h2>
        </div>
        <div>
          <h2 className="view_element_indicator">Hair Color</h2>
          <h2 className="view_element_data">{hairColor}</h2>
        </div>
        <div>
          <h2 className="view_element_indicator">Skin Color</h2>
          <h2 className="view_element_data">{skinColor}</h2>
        </div>
        <div>
          <h2 className="view_element_indicator">Birth Year</h2>
          <h2 className="view_element_data">{birthYear}</h2>
        </div>
      </div>
      <div className="view_container">
        <h1 className="view_title">Vehicles</h1>
        {vehicles.map(({ name, id }) => (
          <div key={id}>
            <h2 className="view_element_indicator">{name}</h2>
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
