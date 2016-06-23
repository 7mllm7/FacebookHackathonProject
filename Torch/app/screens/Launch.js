import React          from 'react';
import { View, Image } from "react-native";
import { startup }    from '../actions/creators';
import { connect }    from 'react-redux';
import launch from '../assets/launch.png';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');


class Launch extends React.Component {
  componentDidMount() {
    this.props.startup();
  }

  render() {
    return (
      <View>
        <Image source={launch} style={{ width, height }}/>
      </View>
    );
  }
}

export default connect(()=>({}),{ startup })(Launch);