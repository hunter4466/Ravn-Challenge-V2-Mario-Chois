/* eslint-disable no-param-reassign */
import { useQuery, gql } from '@apollo/client';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function App() {
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
  if (loading && !data) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (data.allPeople.edges ? (
    <div>
      <div className="header_bar">
        <h1>Ravn Star Wars Registry</h1>
      </div>
      <Router>
        <div className="navigator_bar">
          {data.allPeople.edges.map(({ node }) => (
            <NavLink key={node.id} activeClassName="selected_nav_item" className="nav_item" to={`/${node.id}`}>
              {node.name}
              {' '}
              {node.species ? node.species.name : 'Human'}
              {' from '}
              {node.homeworld.name}
            </NavLink>
          ))}
        </div>
        <Switch>
          {data.allPeople.edges.map(({ node }) => (
            <Route key={node.id} exact path={`/${node.id}`}>
              <div>
                {node.name}
                {' '}
                {node.species ? node.species.name : 'Human'}
                {' from '}
                {node.homeworld.name}
              </div>
            </Route>
          ))}
        </Switch>
        {loading ? <p>Loading...</p> : null}
      </Router>
    </div>
  ) : false
  );
}

export default App;
