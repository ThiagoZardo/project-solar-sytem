import React from 'react';
import PropTypes from 'prop-types';

class Planetcard extends React.Component {
  render() {
    const { planetImage } = this.props;
    const { planetName } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

Planetcard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default Planetcard;
