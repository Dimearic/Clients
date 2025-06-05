import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function ClientForm({ header, place, value, multiline, bio, onChangeText }) {
  return (
    <View>
      <Text style={styles.textFieldHeader}>{header}</Text>
      <TextInput
        style={bio ? styles.textFieldBio : styles.textField}
        placeholder={place}
        placeholderTextColor="#A3A3A3"
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textField: {
    height: 48,
    marginTop: 4,
    paddingLeft: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  textFieldBio: {
    height: 92,
    paddingTop: 12,
    marginTop: 4,
    paddingLeft: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  textFieldHeader: {
    fontSize: 16,
    marginLeft: 16,
    marginTop: 24,
    color: '#212322',
  },
});
