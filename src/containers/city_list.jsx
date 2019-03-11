import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions/index';

import City from './city';


class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  renderList() {
    return this.props.cities.map((city) => {
      return (
        <City city={city} key={city.address} />
      );
    });
  }

  render() {
    return (
      <div className="cities">
        {this.renderList()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
