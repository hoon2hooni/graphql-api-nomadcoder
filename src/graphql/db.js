export const people = [
  {
    id: "0",
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: "1",
    name: "Jisu",
    age: 18,
    gender: "female",
  },
  {
    id: "2",
    name: "Japan Guy",
    age: 18,
    gender: "male",
  },
  {
    id: "3",
    name: "Daal",
    age: 18,
    gender: "male",
  },
  {
    id: "4",
    name: "JD",
    age: 18,
    gender: "male",
  },
  {
    id: "5",
    name: "moondaddi",
    age: 18,
    gender: "male",
  },
  {
    id: "6",
    name: "flynn",
    age: 18,
    gender: "male",
  },
];

export let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1,
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8,
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99,
  },
  {
    id: 3,
    name: "Logan",
    score: 2,
  },
];

export const getById = (targetId) => people.find(({ id }) => id === targetId);

export const addMovie = (name, score) => {
  const addedMovie = {
    id: movies.length,
    name,
    score,
  };

  movies.push(addedMovie);
  return addedMovie;
};
