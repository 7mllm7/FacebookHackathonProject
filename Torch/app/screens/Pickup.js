import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { pickup, drop } from '../actions/creators';

class Pickup extends React.Component {
  constructor() {
    super();
    this.state = { text: 'Moshe' };
  }

  render() {
    const {current, location, drop, pickup} = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={ text => this.setState({text})}
          value={this.state.text} />

        <TouchableHighlight onPress={ () => current ? drop(location) : pickup(location) }>
          <Text>{ current ? 'Drop' : 'Pickup' }</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


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
