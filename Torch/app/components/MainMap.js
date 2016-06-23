import React from 'react';
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import _ from 'lodash'

const torchMapMarker = require('../assets/torch_map_marker.png');

export default class MainMap extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    const { torch, destination } = this.props;
    const currentLocation = torch ? torch.currentLocation : destination;
    console.log(this.props.runs)
    return (
          <MapView
              style={styles.map}
              initialRegion={{...currentLocation,
                latitudeDelta: 1.3922,
                longitudeDelta: 1.3421
              }}
          >
              {(() => {
                if (torch) {
                  return <MapView.Marker
                      key={0}
                      coordinate={currentLocation}
                      title={torch.name}
                      image={{
                        uri: 'https://sirjohnlillieprimaryschool.files.wordpress.com/2012/05/torch.png?w=100&h=100'
                      }}
                  />
                }
              })()}
            {this.props.runs.map((run, index, array) => (_.flatten([
                <MapView.Marker
                    key={index+1}
                    coordinate={destination ? run.destination : run.origin}
                    title={`${run.name} was picked up!`}
                />,
                <MapView.Polyline
                    key={array.length+1}
                    strokeColor="#F00"
                    lineCap="round"
                    geodesic={true}
                    strokeWidth={4}
                    coordinates={[
                        run.origin,
                        run.destination
                    ]}
                />
            ])))}
          </MapView>
    );
  }
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

MainMap.propTypes = {
  runs: React.PropTypes.array.isRequired
};

export default MainMap;
