import React, { Component } from 'react';

import City from './city';


class CityList extends Component {
  renderList() {
    return this.props.cities.map((city, key) => {
      return (
        <City city={city} key={city.address} />
      );
    });
  }

  render() {
    return(
      <div className="cities">
        {this.renderList()}
      </div>
    );
  }
}

export default CityList;