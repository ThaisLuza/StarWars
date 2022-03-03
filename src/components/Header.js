import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FormFilter() {
  const { filterName,
    setFilterName,
    setFilterByNumericValues } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>Projeto Star Wars</h1>
      <input
        type="text"
        data-testid="name-filter"
        value={ filterName.name }
        onChange={ (e) => setFilterName({ name: e.target.value }) }
      />
      <label htmlFor="column-filter">
        Coluna
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operador
        <select
          name="comparison-filter"
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor
        <input
          onChange={ ({ target }) => setValue(target.value) }
          type="number"
          data-testid="value-filter"
          value={ value }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilterByNumericValues({ column, comparison, value }) }
      >
        FILTRAR
      </button>
    </div>
  );
}

export default FormFilter;
