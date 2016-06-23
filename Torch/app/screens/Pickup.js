import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { pickup, drop } from '../actions/creators';

const Pickup = ({ current, location, drop, pickup }) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={ () => current ? drop(location) : pickup() }>
      <Text>{ current ? 'Drop' : 'Pickup' }</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    right: 0,
    left: 0
  }
});

const mapStateToProps = (state) => ({
  current: state.runs.torch.currentRun,
  location: state.location
});

export default connect(mapStateToProps, { pickup, drop })(Pickup);
