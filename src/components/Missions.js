import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <section className="containerMissions">
        <div>
          <Title headline="Missões" />
        </div>
        <div className="mission" data-testid="missions">
          { missions.map((missionInfos) => (
            <div className="cardMission" key={ missionInfos.name }>
              <MissionCard
                name={ missionInfos.name }
                year={ missionInfos.year }
                country={ missionInfos.country }
                destination={ missionInfos.destination }
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Missions;
