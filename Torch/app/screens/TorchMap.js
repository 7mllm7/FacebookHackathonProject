import React                      from 'react';
import { View, Text } from "react-native";
import MainMap from '../components/MainMap.js'

class TorchMap extends React.Component {

  
  render() {
    return (
      <MainMap
          runs={[
            {
              name: "My First Run",
              origin: {
                  longitude: 29.8,
                  latitude: 30.0
              },
              destination: {
                longitude: 30.1,
                latitude: 30.1
              }
            },
            {
              name: "My Second Run",
                origin: {
                  longitude: 30.1,
                  latitude: 30.1
                },
                destination: {
                  longitude: 29.9,
                  latitude: 29.8
                }
            },
            {
              name: "My Third Run",
              origin: {
                  longitude: 29.9,
                  latitude: 29.8
              },
              destination: {
                longitude: 30.7,
                latitude: 30.4
              }
            }
          ]}
          torch={
            {
              name: "My Torch!",
              location: {
                  longitude: 30.7,
                  latitude: 30.4
              }
            }
          }
      />
    );
  }
}

export default TorchMap;