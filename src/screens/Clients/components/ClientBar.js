import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Shadow,
  StyleSheet,
} from 'react-native';

import NavigationIcon from '../../../assets/Navigation.png';

export default function ClientBar({ client, onPress }) {
  //console.log('Клиент приходит в функцию: ',client)
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(client)}>
      <View style={[styles.row, styles.shadow]}>
        <View
          style={[
            styles.circle,
            client.online ? styles.online : styles.offline,
          ]}
        />
        <Image source={client.photo} style={styles.clientPhoto} />
        <View marginLeft="18">
          <Text style={styles.clientHeader}>{client.name}</Text>
          <Text style={styles.clientCity}>{client.city}</Text>
        </View>
        <Image source={NavigationIcon} style={styles.navigation}></Image>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  row: {
    backgroundColor: 'white',
    width: '100%',
    height: 92,
    borderRadius: 16,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  clientHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212322',
  },
  clientCity: {
    fontSize: 13,
    fontWeight: '400',
    color: '#A3A3A3',
    marginTop: 4,
  },
  clientPhoto: {
    height: '90%',
    aspectRatio: 1,
    width: 'auto',
    borderRadius: '100%',
    marginLeft: 8,
    marginRight: 8,
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5.0,
  },
  circle: {
    width: '5%',
    aspectRatio: 1,
    borderRadius: '100%',
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    top: 64,
    left: 64,
    zIndex: 10,
  },
  online: {
    backgroundColor: '#32CD32',
  },
  offline: {
    backgroundColor: '#ff2400',
  },
  navigation: {
    //height: '40%',
    height: 24,
    width: 'auto',
    aspectRatio: 1,
    resizeMode: 'contain',
    position: 'absolute',
    right: 16,
  },
});
