import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import ProfileBox from './components/ProfileBox.js';
import BottomButtonMore from './components/BottomButtonMore.js';
import Bio from './components/Bio';
import NavigationBar from './components/NavigationBar';
import MyButton from './components/MyButton';

const showMoreClick = () => {
  console.log('Пока нам нечего показать');
};

const chatClick = () => {
  console.log('Покинула чат чат чат чат, ча ча ча ча');
};

const callClick = () => {
  console.log('Позвони мне, позвони');
};

export default function Profile({ navigation, route }) {
  const client = route.params || {};

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <NavigationBar
          newClick={() =>
            navigation.navigate('AddEdit', {
              client,
              header: 'Редактировать профиль',
              buttonText: 'Сохранить',
            })
          }
          backClick={() => navigation.goBack()}
        />
        <ProfileBox
          photo={client.photo || ''}
          name={client.name || ''}
          city={client.city || ''}
        />
        <View style={styles.buttonBlock}>
          <MyButton text="Чат" onPress={chatClick} />
          <View style={{ width: 8 }} />
          <MyButton text="Звонок" coral onPress={callClick} />
        </View>
        <Bio text={client.bio || ''} />
        <View style={{ flex: 1 }} />
        <BottomButtonMore text="Показать больше" onPress={showMoreClick} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  buttonBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
});
