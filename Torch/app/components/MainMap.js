import React from 'react';
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


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
              initialRegion={{
                latitude: -1.292545,
                longitude: 36.811955,
                latitudeDelta: 1,
                longitudeDelta: 1
              }}
          >
              {(() => {
                let torch = this.props.torch;
                if (torch) {
                  return <MapView.Marker
                      key={0}
                      coordinate={torch.location}
                      title={torch.name}
                      image={require('../assets/torch_map_marker.png')}
                  />
                }
              })()}
            {this.props.runs.map((run, index) => (
                <MapView.Marker
                    key={index+1}
                    coordinate={run.location}
                    title={run.name}
                />
            ))}
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
