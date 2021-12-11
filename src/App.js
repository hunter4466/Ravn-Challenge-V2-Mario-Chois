import React from 'react';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query getAllFlms {
    allFilms{
      films {title, episodeID, openingCrawl}
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      {data.allFilms.films.map(({ title, episodeID, openingCrawl }) => (
        <div key={episodeID}>
          <p>
            {title}
            :
            {openingCrawl}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
