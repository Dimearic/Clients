import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ClientBar from './components/ClientBar';
import SearchBar from './components/SearchBar';
import BottomButton from '../../components/BottomButton';

const defaultClients = [
  {
    id: 1,
    name: 'Юлия Робертовна',
    city: 'Калининград',
    photo: require('../../assets/Julia.jpg'),
    online: true,
    bio: 'Актриса, бизнесвумен, филантроп. "Родилась 28 октября 1967 года в городе Смерна (штат Джорджия). Робертс стала третьим ребёнком в семье. У неё есть старший брат Эрик Робертс (род. 18 апреля 1956) и сестра Лиза (род. 5 августа 1965)."',
  },
  {
    id: 2,
    name: 'Иван Петров',
    city: 'Зеленоградск',
    photo: require('../../assets/JudeLaw.png'),
    online: false,
    bio: 'Мужчина в самом расцвете сил',
  },
  {
    id: 3,
    name: 'Хызыр Аппаев',
    city: 'о.п. Лавочка',
    photo: require('../../assets/Appaev.jpeg'),
    phone: '+7921212121',
    online: true,
    bio: 'Коммунист',
  },
  {
    id: 4,
    name: 'Мальчик Спальчиков',
    city: 'Нарния',
    photo: require('../../assets/Malchik.jpg'),
    online: false,
    bio: 'Ищу возможности для карьерного роста',
  },
];

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@clients', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@clients');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

clearAll = async () => {
  // очистка памяти AsyncStorage
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log('Done.');
};

export default function Clients({ navigation, route }) {
  const [filter, setFilter] = useState();
  const [clients, setClients] = useState(defaultClients);
  const [filterClients, setFilteredClients] = useState(clients);

  const [newClients, setNewClients] = useState(defaultClients);
  const [searchClient, setSearchClient] = useState(clients);
  /* РАБОТАЕТ ПОИСК, НО НЕ ОТОБРАЖАЮТСЯ НОВЫЕ КЛИЕНТЫ */

  const loadClients = async () => {
    const storedClients = await getData();
    setClients(storedClients ?? []);
  };

  useEffect(() => {
    //clearAll(); // очистка памяти AsyncStorage
    loadClients();
  }, []);

  useEffect(() => {
    if (route.params?.name) {
      const newClients = [...clients, route.params];
      setClients(newClients);
      storeData(newClients);
      navigation.setParams({});
      //setFilteredClients([...clients, route.params]);
    }
  }, [route.params?.name, navigation]);

  // надо передавать копию массива [...clients]
  useEffect(() => {
    if (filter) {
      setFilteredClients(
        [...clients].filter(
          (a) =>
            a.name.match(new RegExp(filter, 'gi')) ||
            a.city.match(new RegExp(filter, 'gi'))
        )
      );
    } else {
      setFilteredClients(clients);
    } 
  }, [filter, clients]);

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text style={styles.header}>Клиенты</Text>
        <SearchBar value={filter} onChangeText={setFilter} />
        <Text style={styles.noClients}>Нет клиентов</Text>
        <FlatList
          //data={clients}
          /*data={searchClient}*/
          data={filterClients} // работает фильтр
          renderItem={({ item }) => (
            <ClientBar
              client={item}
              onPress={() => navigation.navigate('Profile', item)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <BottomButton
          text="Добавить нового"
          onPress={() =>
            navigation.navigate('AddEdit', {
              clients,
              header: 'Добавить нового',
              buttonText: 'Добавить',
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 28,
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginLeft: 24,
  },
  noClients: {
    fontSize: 16,
    fontWeight: '400',
    color: '#A3A3A3',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 200,
  },
});
