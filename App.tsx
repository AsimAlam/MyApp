import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './scr/Home'
import { Text, View } from 'react-native';
import SignUp from './scr/SignUp';
import Login from './scr/Login';
import WelcomePage from './scr/WelcomePage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <View>
    //   <Text>Hello world</Text>

    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='WelcomePage' component={WelcomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;