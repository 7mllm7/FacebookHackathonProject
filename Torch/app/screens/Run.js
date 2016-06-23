/**
 * Created by MLmediapps on 23/06/2016.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Run extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Name: {this.props.run.name}</Text>
                <Text>Origin: {this.props.run.origin}</Text>
                <Text>Destination: {this.props.run.destination}</Text>
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

export default Run;
