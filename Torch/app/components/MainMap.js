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
    return (
          <MapView
              style={styles.map}
              initialRegion={{...this.props.torch.currentLocation,
                latitudeDelta: 1.3922,
                longitudeDelta: 1.3421
              }}
          >
              {(() => {
                let torch = this.props.torch;
                if (torch) {
                  return <MapView.Marker
                      key={0}
                      coordinate={torch.currentLocation}
                      title={torch.name}
                      image={torchMapMarker}
                  />
                }
              })()}
            {this.props.runs.map((run, index, array) => (_.flatten([
                <MapView.Marker
                    key={index+1}
                    coordinate={run.origin}
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
  torch : React.PropTypes.object.isRequired,
  runs: React.PropTypes.array.isRequired
};

export default MainMap;
