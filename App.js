import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar } from 'react-native';
import Line from './charts/Line'
import Pie from './charts/Pie'
import Home from './components/Home'
import Toaster from './components/toast'
import applogo from './assets/splash.png'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const MyTheme = {
  dark: false,
  colors: {
    primary: '#151a34',
    background: '#151a34',
    card: '#151a34',
    text: '#FFFFFF',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',}
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar style="light"/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LineChart" component={Line} options={({ route }) => ({ title: route.params.params })} />
        <Stack.Screen name="PieChart" component={Pie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151a34',
  },
  logo: {
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    width: 100,
    height: 100,
    top: -200
  },
  headerStyle: {
    backgroundColor: 'red',
  }
});
