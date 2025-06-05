import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import ClientForm from './components/ClientForm';
import BottomButton from '../../components/BottomButton';
import NavigationBack from './components/NavigationBack';

export default function AddEdit({ navigation, route }) {
  const headerText = route.params.header;
  const buttonText = route.params.buttonText;
  const [client, setClient] = useState(route.params.client ?? {});

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <NavigationBack text={headerText} onPress={() => navigation.goBack()} />
        <ClientForm
          header="Фото"
          place="Вставьте ссылку на фото"
          value={client.photo}
          onChangeText={(text) => setClient({ ...client, photo: text })}
        />
        <ClientForm
          header="ФИО"
          place="Введите фамилию и имя"
          value={client.name}
          onChangeText={(text) => setClient({ ...client, name: text })}
        />
        <ClientForm
          editable
          header="Номер телефона"
          place="+7 (000) 000 00 00"
          keyboardType="numeric"
          value={client.phone}
          onChangeText={(text) => setClient({ ...client, phone: text })}
        />
        <ClientForm
          editable
          header="Город"
          place="Выберите город"
          value={client.city}
          onChangeText={(text) => setClient({ ...client, city: text })}
        />
        <ClientForm
          header="Био"
          place="Укажите хобби, интересы, образование и стаж работы"
          value={client.bio}
          onChangeText={(text) => setClient({ ...client, bio: text })}
          multiline={true}
          bio="true"
        />
      </View>
      <BottomButton
          text={buttonText}
          onPress={() =>
            navigation.navigate('Clients', {
              id: client.id,
              name: client.name,
              city: client.city,
              phone: client.phone,
              bio: client.bio,
              photo: client.photo,
            })
          }
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
  container: {
    flex: 1,
    padding: 24,
  },
});
