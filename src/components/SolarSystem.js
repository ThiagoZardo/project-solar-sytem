import React from 'react';
import Title from './Title';
import Planetcard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planets.map((planetInfos) => (
          <Planetcard
            key={ planetInfos.name }
            planetName={ planetInfos.name }
            planetImage={ planetInfos.image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
