import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div className="mission" data-testid="missions">
        <Title headline="Missões" />
        { missions.map((missionInfos) => (
          <MissionCard
            key={ missionInfos.name }
            name={ missionInfos.name }
            year={ missionInfos.year }
            country={ missionInfos.country }
            destination={ missionInfos.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
