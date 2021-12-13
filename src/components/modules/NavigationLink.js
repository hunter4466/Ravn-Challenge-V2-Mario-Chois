/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import doveArrow from '../../assets/images/icons/dove_arrow.svg';

const NavigationLink = ({
  nodeid, name, species, homeworld,
}) => (
  <NavLink key={nodeid} activeClassName="navigation_link_wrapper_active" className="navigation_link_wrapper" to={`/${nodeid}`}>
    <div className="left_side">
      <h1 className="navLink_name">{name}</h1>
      <h2 className="navLink_bio">
        {species}
        {' from '}
        {homeworld}
      </h2>
    </div>
    <img className="right_arrow" src={doveArrow} alt="Arrow" />
    <div className="draw_underline" />
  </NavLink>
);

NavigationLink.propTypes = {
  nodeid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
};

export default NavigationLink;
