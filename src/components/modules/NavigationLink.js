/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({
  nodeid, name, species, homeworld,
}) => (
  <NavLink key={nodeid} activeClassName="selected_nav_item" className="nav_item" to={`/${nodeid}`}>
    {name}
    {' '}
    {species}
    {' from '}
    {homeworld}
  </NavLink>
);

NavigationLink.propTypes = {
  nodeid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
};

export default NavigationLink;
