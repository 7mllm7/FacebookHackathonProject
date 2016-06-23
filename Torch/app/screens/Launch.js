import React                      from 'react';
import { Actions }                from "react-native-router-flux";
import { View, Text } from "react-native";

class Launch extends React.Component {
  componentDidMount() {
    setTimeout(()=> {
      Actions.main()
    },4000)
  }

  render() {
    return (
      <View><Text>Launch</Text></View>
    );
  }
}

export default Launch;