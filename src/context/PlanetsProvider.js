import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchAPI from '../services/fetchAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]); // resposta da api

  const [filterName, setFilterName] = useState({ name: '' }); // filtrar por nome

  const [filtered, setFiltered] = useState(null); // lista os filtrados

  useEffect(() => {
    const filter = data.filter((planet) => (
      planet.name.toUpperCase().includes(filterName.name.toUpperCase())
    ));
    setFiltered(filter);
  }, [data, filterName]);

  const fetchPlanets = async () => {
    const response = await fetchAPI();
    setData(response);
  };

  useEffect(() => {
    setFiltered(data);
  }, [data]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const value = { filtered, filterName, setFilterName };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default PlanetsProvider;
