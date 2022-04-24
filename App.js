import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopBar from './components/topbar.js'
import Navbar from './components/navbar.js'
import { Box, Center, NativeBaseProvider, useScreenReaderEnabled } from "native-base";
import { db } from './firebaseConfig/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';

import Homepage from './pages/homepage2.js';
import Favorite from './pages/favorite.js';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Homepage} />
        <Stack.Screen name="Favorite" component={Favorite} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Homepage/>
  )
}