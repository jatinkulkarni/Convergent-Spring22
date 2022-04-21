import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View } from 'react-native'

import TopBar from './components/topbar.js'
import Navbar from './components/navbar.js'
import { Box, Center, NativeBaseProvider, useScreenReaderEnabled } from "native-base";
import { db } from './firebaseConfig/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';

import Homepage from './pages/homepage2';

export default function App() {
  return (
    <Homepage/>
  )
}