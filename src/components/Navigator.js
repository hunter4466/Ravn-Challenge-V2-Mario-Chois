/* eslint-disable no-param-reassign */
import { useQuery, gql } from '@apollo/client';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavigationLink from './modules/NavigationLink';
import NavigationView from './modules/NavigationView';
import loadIcon from '../assets/images/icons/loading_icon.svg';

const Navigator = () => {
  const LOAD_DATA = gql`
  query allPeople($first: Int, $after: String) {
    allPeople (first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          name
          species {name}
          homeworld {name}
          eyeColor
          hairColor
          skinColor
          birthYear
          vehicleConnection {
            vehicles {
              name
              id
            }
          }
          
        }
      }
      pageInfo {
          endCursor
          hasNextPage
        }
      totalCount
    }
  }
`;
  const first = 5;
  const {
    loading, error, data, fetchMore,
  } = useQuery(LOAD_DATA, {
    variables: { first },
    notifyOnNetworkStatusChange: true,
  });
  useEffect(() => {
    if (data) {
      if (data.allPeople.edges.length < data.allPeople.totalCount) {
        fetchMore({
          variables: {
            first,
            after: data.allPeople.pageInfo.endCursor,
          },
        });
      }
    }
  });
  const speciesParser = (fStr, sStr) => {
    if (/\d/.test(fStr) && !sStr) {
      return 'Droid';
    }
    if (!sStr) {
      return 'Human';
    }
    return sStr.name;
  };
  if (error) return <div className="error_wrap"><h2 className="error_tag">Failed to load data</h2></div>;
  return (data ? (
    <Router>
      <div className="router_container">
        <div className="navigation_bar">
          <span className="stone">.</span>
          {loading && !data ? (
            <div className="loading_tag_wrapper">
              <img className="load_icon" src={loadIcon} alt="load_icon" />
              <h2 className="load_text">Loading</h2>
            </div>
          )
            : (data.allPeople.edges.map(({ node }) => (
              <NavigationLink
                key={node.id}
                nodeid={node.id}
                name={node.name}
                species={speciesParser(node.name, node.species)}
                homeworld={node.homeworld.name}
              />
            )))}
          {' '}
          {loading ? (
            <div className="loading_tag_wrapper">
              <img className="load_icon" src={loadIcon} alt="load_icon" />
              <h2 className="load_text">Loading</h2>
            </div>
          ) : null}
        </div>
        <Switch className="view_area">
          {data.allPeople.edges.map(({ node }) => (
            <Route key={node.id} exact path={`/${node.id}`}>
              <NavigationView
                key={node.id}
                nodeid={node.id}
                eyeColor={node.eyeColor}
                hairColor={node.hairColor}
                skinColor={node.skinColor}
                birthYear={node.birthYear}
                vehicles={node.vehicleConnection.vehicles}
              />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  ) : false);
};

export default Navigator;
