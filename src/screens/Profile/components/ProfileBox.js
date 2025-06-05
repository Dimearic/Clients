import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default function ProfileBox({ photo, name, city}) {
  return (
    <View style={styles.profileBox}>
      <Image
        style={styles.profilePhoto}
        source={photo}></Image>
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profileCity}>{city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileBox: {
    alignItems: 'center',
  },
  profilePhoto: {
    width: '60%',
    aspectRatio: 1,
    height: 'auto',
    borderRadius: '100%',
  },
  profileName: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: 700,
    color: '#212322',
  },
  profileCity: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: 400,
    color: '#A3A3A3',
  },
});