import React, {
    PropTypes
}                from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
}                from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => (
  <View style={styles.container}>
    <Text>Icon</Text>
  </View>
);

TabIcon.propTypes = propTypes;

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30
  }
});

export default TabIcon;