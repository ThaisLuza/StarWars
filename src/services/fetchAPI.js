const URL = 'https://star-api-wars.herokuapp.com/';

const fetchAPI = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error.message);
  }
};

export default fetchAPI;
