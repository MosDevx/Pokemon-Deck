import React from 'react';
import { useGetJokeByTypeQuery, useGetRandomJokeQuery } from '../redux/jokesApi';

const Jokes = () => {
  // const { data, error, isLoading } = useGetJokeByTypeQuery('programming', { pollingInterval: 3000 });
  const { data:randomData, error, isLoading } = useGetRandomJokeQuery({pollingInterval:3000});

  // const { randomData, randomError, randomIsLoading } = useGetRandomJokeQuery();

  if (isLoading) {
    return (
      <div>Is Loading</div>
    );
  }

  if (error) {
    return (
      <div>Woopsie an Error occured</div>
    );
  }

  return (
    <div>
      Jokes
      <p>{randomData.setup}</p>
      <p>{randomData.punchline}</p>

    </div>
  );
};

export default Jokes;
