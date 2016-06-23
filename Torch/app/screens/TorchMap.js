import React                      from 'react';
import { View, Text } from "react-native";
import MainMap from '../components/MainMap.js';
import { connect } from 'react-redux';
class TorchMap extends React.Component {

  render() {
    return (
      <MainMap
          runs={this.props.runs}
          torch={
            {
              name: "My Torch!",
              location: {
                  longitude: 30.7,
                  latitude: 30.4
              }
            }
          }
      />
    );
  }
}

export default connect(({runs})=>({runs}))(TorchMap);