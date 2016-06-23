import React                      from 'react';
import { View, Text } from "react-native";
import MainMap from '../components/MainMap.js';
import { connect } from 'react-redux';
class TorchMap extends React.Component {

  render() {
    const { list, torch } = this.props;
    return (
      <MainMap runs={ list } torch={ torch }/>
    );
  }
}

export default connect(({ runs: { list, torch} })=>({ list, torch }))(TorchMap);