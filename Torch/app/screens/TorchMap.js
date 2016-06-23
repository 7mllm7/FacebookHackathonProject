import React          from 'react';
import {View, Text} from "react-native";
import {connect} from 'react-redux';
import MainMap from '../components/MainMap.js';
import {watchLocation, unwatchLocation} from '../actions/creators';

class TorchMap extends React.Component {

  componentWillMount() {
    this.props.watchLocation();
  }

  componentWillUnmount() {
    this.props.unwatchLocation();
  }

  render() {
    const { list, torch } = this.props;
    return (
      <MainMap runs={ list } torch={ torch } />
    );
  }
}

export default connect(({ runs: { list, torch} })=>({ list, torch }), { watchLocation, unwatchLocation })(TorchMap);
