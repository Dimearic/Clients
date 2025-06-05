import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import NavigationDown from '../../../assets/NavigationDown.png';

export default function BottomButtonMore({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.addButton}>
        <Text style={styles.addButtonText}>{text}</Text>
        <Image source={NavigationDown} style={styles.navigation} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: 'white',
    borderColor: '#FB7360',
    borderWidth: 1.5,
    height: 52,
    width: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FB7360',
  },
  navigation: {
    height: '50%',
    width: 'auto',
    aspectRatio: 1,
    resizeMode: 'contain',
    marginLeft: 4,
  },
});
