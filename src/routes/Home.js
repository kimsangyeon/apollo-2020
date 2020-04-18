import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>error...</h1>;
  }

  if (data && data.movies) {
    return data.movies.map((movie) => <h1>{movie.id}</h1>);
  }
};
