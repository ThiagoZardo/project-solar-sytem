import React from 'react';
import Title from './Title';
import Planetcard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <section className="containerSolarSystem">
        <div>
          <Title className="title" headline="Planetas" />
        </div>
        <div className="solarSystem" data-testid="solar-system">
          { planets.map((planetInfos) => (
            <Planetcard
              key={ planetInfos.name }
              planetName={ planetInfos.name }
              planetImage={ planetInfos.image }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default SolarSystem;
