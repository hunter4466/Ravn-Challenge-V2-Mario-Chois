import { useQuery, gql } from '@apollo/client';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function App() {
  const EXCHANGE_RATES = gql`
  query getAllFlms {
    allPeople (first: 5) {
      people {id, name, species {name}, homeworld {
        name
      }}
    }
  }
`;
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (data.allPeople.people ? (
    <div>
      <div className="header_bar">
        <h1>Ravn Star Wars Registry</h1>
      </div>
      <Router>
        <div className="navigator_bar">
          {data.allPeople.people.map(({
            id, name, species, homeworld,
          }) => (
            <NavLink key={id} activeClassName="selected_nav_item" className="nav_item" to={`/${id}`}>
              {name}
              {species ? species.name : 'Human'}
              {homeworld.name}
            </NavLink>
          ))}
        </div>
        <Switch>
          {data.allPeople.people.map(({
            id, name, species, homeworld,
          }) => (
            <Route key={id} exact path={`/${id}`}>
              <div>
                {name}
                {species ? species.name : 'Human'}
                {homeworld.name}
              </div>
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  ) : false
  );
}

export default App;
