import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchAPI from '../services/fetchAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const fetchPlanets = async () => {
    const response = await fetchAPI();
    setData(response);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const value = { data };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
