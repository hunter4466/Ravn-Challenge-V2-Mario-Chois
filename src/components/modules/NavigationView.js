/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const NavigationView = ({
  nodeid, eyeColor, hairColor, skinColor, birthYear, vehicles,
}) => {
  const parser = (str) => {
    if (str === 'n/a') {
      return 'Unknown';
    }
    const capt = str.charAt(0).toUpperCase() + str.slice(1);
    return capt;
  };
  return (
    <Route exact path={`/${nodeid}`}>
      <div className="view_main_containter">
        <div className="view_container">
          <div className="view_title_wrapper">
            <h1 className="view_title">General Information</h1>
          </div>
          <div className="view_element">
            <h2 className="view_element_indicator">Eye Color</h2>
            <h2 className="view_element_data">{parser(eyeColor)}</h2>
          </div>
          <div className="view_element">
            <h2 className="view_element_indicator">Hair Color</h2>
            <h2 className="view_element_data">{parser(hairColor)}</h2>
          </div>
          <div className="view_element">
            <h2 className="view_element_indicator">Skin Color</h2>
            <h2 className="view_element_data">{parser(skinColor)}</h2>
          </div>
          <div className="view_element">
            <h2 className="view_element_indicator">Birth Year</h2>
            <h2 className="view_element_data">{parser(birthYear)}</h2>
          </div>
        </div>
        <div className="view_container">
          <div className="view_title_wrapper">
            <h1 className="view_title">Vehicles</h1>
          </div>
          {vehicles.length > 0 ? (vehicles.map(({ name, id }) => (
            <div key={id} className="view_element">
              <h2 className="view_element_indicator">{name}</h2>
            </div>
          ))) : (
            <div className="view_element">
              <h2 className="view_element_no_vehicles">No vehicles found</h2>
            </div>
          )}
        </div>
      </div>
    </Route>
  );
};

NavigationView.propTypes = {
  nodeid: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  skinColor: PropTypes.string.isRequired,
  birthYear: PropTypes.string.isRequired,
  vehicles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavigationView;
