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

const NavBar = () => {
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
  if (error) return <p>Page could not be loaded</p>;
  return (data ? (
    <Router>
      <div className="router_container">
        <div className="navigation_bar">
          {loading && !data ? <p>Loading...</p>
            : (data.allPeople.edges.map(({ node }) => (
              <NavigationLink
                key={node.id}
                nodeid={node.id}
                name={node.name}
                species={node.species ? node.species.name : 'Human'}
                homeworld={node.homeworld.name}
              />
            )))}
          {loading ? <p>Loading...</p> : null}
          {error ? <p>Ups... Something went wrong when trying to pull the data</p> : null}
        </div>
        <Switch className="view_area">
          {data.allPeople.edges.map(({ node }) => (
            <Route key={node.id} exact path={`/${node.id}`}>
              <NavigationView
                key={node.id}
                nodeid={node.id}
                name={node.name}
                species={node.species ? node.species.name : 'Human'}
                homeworld={node.homeworld.name}
              />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  ) : false);
};

export default NavBar;
