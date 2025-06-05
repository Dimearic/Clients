import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function BottomButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.addButton}>
        <Text style={styles.addButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
  addButton: {
    backgroundColor: '#FB7360',
    height: 52,
    width: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
