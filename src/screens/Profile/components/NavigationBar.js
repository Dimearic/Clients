import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import ArrowButton from '../../../assets/LeftArrow.png';
import EditSquare from '../../../assets/EditSquare.png';

export default function NavigationBar({ backClick, newClick }) {
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity style={styles.clickable} onPress={backClick}>
        <Image style={styles.arrowButton} source={ArrowButton} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.clickable} onPress={newClick}>
        <Image style={styles.squareButton} source={EditSquare} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  clickable: {
    height: 42,
  },
  navigationBar: {
    height: 42,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowButton: {
    height: '100%',
    width: 'auto',
    aspectRatio: 1,
  },
  squareButton: {
    height: '60%',
    width: 'auto',
    aspectRatio: 1,
  },
});
