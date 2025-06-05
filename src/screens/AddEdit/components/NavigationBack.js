import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import LeftArrow from '../../../assets/LeftArrow.png';

export default function NavigationBack({ text, onPress }) {
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity style={styles.clickable} onPress={onPress}>
        <Image style={styles.arrowButton} source={LeftArrow} />
      </TouchableOpacity>
      <Text style={styles.header}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    height: 42,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowButton: {
    height: '100%',
    aspectRatio: 1,
    width: 'auto',
  },
  clickable: {
    height: 42,
    position: 'absolute',
    left: 0,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212322',
  },
});
