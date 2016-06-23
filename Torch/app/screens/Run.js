import React from 'react';
import { connect } from 'react-redux';
import MainMap from '../components/MainMap';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Run extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { origin, destination, name } = this.props.run;
        return (
            <View style={styles.container}>
                <Text>Name: { name }</Text>
                <MainMap runs={[{ origin, destination }]} destination={ destination }/>
            </View>
        );
    }
};

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

Run.propTypes = {
    run: React.PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    run: state.runs.list[ownProps.index]
  }
}

export default connect(mapStateToProps)(Run);
