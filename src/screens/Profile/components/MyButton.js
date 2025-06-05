import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function MyButton({ coral,text,onPress }) {
  return (
    <TouchableOpacity style={coral ? styles.coralButton : styles.whiteButton} onPress={onPress}>
      <Text style={coral ? styles.coralButtonText : styles.whiteButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  coralButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  coralButton: {
    backgroundColor: '#FB7360',
    height: 52,
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteButton: {
    backgroundColor: 'white',
    height: 52,
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FB7360',
    borderWidth: 1.5,
  },
  whiteButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FB7360',
  },
});
