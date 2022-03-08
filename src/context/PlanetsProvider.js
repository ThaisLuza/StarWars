import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchAPI from '../services/fetchAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]); // resposta da api

  const [filterName, setFilterName] = useState({ name: '' }); // filtrar por nome

  const [filtered, setFiltered] = useState([]); // lista os filtrados

  const [filterByNumericValues, setFilterByNumericValues] = useState([]); // filtrar por numeros

  const [options, setOptions] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const fetchPlanets = async () => {
    const response = await fetchAPI();
    setData(response);
    setFiltered(response);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filter = data
      .filter((planet) => planet.name.toUpperCase()
        .includes(filterName.name.toUpperCase()));
    setFiltered(filter);
  }, [data, filterName]);

  // o trecho de código a seguir foi baseado no código do colega Rafael Bonin (https://github.com/tryber/sd-017-project-starwars-planets-search/pull/83/files#)

  useEffect(() => {
    const { column, value, comparison } = filterByNumericValues;
    const filter = filtered.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return parseInt(planet[column], 10) > value;
      case 'menor que':
        return parseInt(planet[column], 10) < value;
      default:
        return planet[column] === value;
      }
    });
    setFiltered(filter);
    setOptions(options.filter((item) => item !== column));
  }, [filterByNumericValues]);

  const valores = {
    data,
    options,
    setData,
    filtered,
    filterName,
    setFilterName,
    setFilterByNumericValues,
  };

  return (
    <PlanetsContext.Provider value={ valores }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default PlanetsProvider;
