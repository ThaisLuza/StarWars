import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const { filterName, setFilterName } = useContext(PlanetsContext);
  return (
    <div>
      <h1>Projeto Star Wars</h1>
      <input
        type="text"
        data-testid="name-filter"
        value={ filterName.name }
        onChange={ (e) => setFilterName({ name: e.target.value }) }
      />
    </div>
  );
}

export default Header;
