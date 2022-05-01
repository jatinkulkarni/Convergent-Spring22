import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import TopBar from './components/topbar.js'
import Navbar from './components/navbar.js'
import { Box, Center, NativeBaseProvider, useScreenReaderEnabled, Icon, NativeBaseConfigProvider } from "native-base";
import { db } from './firebaseConfig/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';

import Homepage from './pages/homepage2.js';
import Favorite from './pages/favorite.js';

export default function App() {
  const Stack = createNativeStackNavigator();

  // const Tab = createBottomTabNavigator();
  const Tab = createMaterialBottomTabNavigator();
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#F0635A"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#ffffff' }}
      >
        {/* <Tab.Screen name="Feed" component={Homepage} /> */}
        <Tab.Screen
          name="Feed"
          component={Homepage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="animation" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26} />
            ),
          }}
        />
        {/* <Tab.Screen name="Favorite" component={Favorite} /> */}
      </Tab.Navigator>
    </NavigationContainer>
    // <Homepage/>
  )
}