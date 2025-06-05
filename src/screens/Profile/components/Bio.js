import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const makeSentence = (text) => text.replace(/(?<=\. )/g,'\n\n')

export default function Bio({ text }) {
  return (
    <View>
      <Text style={styles.bioHeader}>Биография</Text>
      <Text style={styles.bioText} numberOfLines = {9} ellipsizeMode = {'tail'}>{makeSentence(text)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bioHeader: {
    marginTop: 72,
    fontSize: 16,
    fontWeight: 600,
  },
  bioText: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 400,
    color: '#A3A3A3',
    lineHeight: 20,
    textAlign: 'justify',
  },
});
