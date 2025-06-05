import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Clients from './src/screens/Clients/index'
import Profile from './src/screens/Profile/index'
import AddEdit from './src/screens/AddEdit/index'

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Clients" component={Clients} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AddEdit" component={AddEdit} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
       <MainStack/>
    </NavigationContainer>
  )
}

