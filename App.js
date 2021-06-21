import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IssTracker from './screens/IssTracker'
import MeteorScreen from './screens/MeteorScreen';
import UpdateScreen from './screens/UpdateScreen';
import HomeScreen from './screens/HomeScreen';
const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home' screenOptions = {{headerShown: false}}>
        <Stack.Screen name = 'Home' component = {HomeScreen}/>
        <Stack.Screen name = 'IssLocation' component = {IssTracker}/>
        <Stack.Screen name = 'Meteors' component = {MeteorScreen}/>
        <Stack.Screen name = 'Updates' component = {UpdateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
