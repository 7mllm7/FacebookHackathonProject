import React          from 'react';
import { View, Text } from "react-native";
import { connect }    from 'react-redux';
import { watchLocation, unwatchLocation } from '../actions/creators';

class TorchMap extends React.Component {

  componentWillMount() {
    this.props.watchLocation();
  }

  componentWillUnmount() {
    this.props.unwatchLocation();
  }

  render() {
    return (
      <View><Text>Map</Text></View>
    );
  }
}

export default connect(null, { watchLocation, unwatchLocation })(TorchMap);