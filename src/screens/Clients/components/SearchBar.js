import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

import SearchIcon from '../../../assets/SearchIcon.png';

export default function SearchBar( { value, onChangeText } ) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image source={SearchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.searchText}
          placeholder="Поиск"
          placeholderTextColor="#A3A3A3"
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  searchBar: {
    backgroundColor: '#F6F6F6',
    height: 44,
    width: '100%',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginLeft: 15.6,
    marginRight: 8,
    width: '5%',
    resizeMode: 'contain',
  },
  searchText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#A3A3A3',
    flex: 0.95,
  },
});
