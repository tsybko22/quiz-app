const BASE_URL = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple';

export const getQuiz = async () => {
  const res = await fetch(BASE_URL);
  const { results } = await res.json();

  return results;
};
