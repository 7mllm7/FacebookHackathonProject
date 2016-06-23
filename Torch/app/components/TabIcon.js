import Icon from 'react-native-vector-icons/FontAwesome';
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

const TabIcon = (iconName) => () => (
  <View style={styles.container}>
    <Icon name={iconName} size={30} color="#900" />
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