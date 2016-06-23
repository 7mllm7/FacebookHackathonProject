import React          from 'react';
import { View, Text } from "react-native";
import { startup }    from '../actions/creators';
import { connect }    from 'react-redux';

class Launch extends React.Component {
  componentDidMount() {
    this.props.startup();
  }

  render() {
    return (
      <View>
        <Text>Launch</Text>
      </View>
    );
  }
}

export default connect(()=>({}),{ startup })(Launch);