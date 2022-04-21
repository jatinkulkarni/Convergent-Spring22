import React, { Component, useState, useEffect } from 'react'
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import TopBar from '../components/topbar.js'
import Navbar from '../components/navbar.js'
import Cards from '../components/cards'
import { 
  Box, Center, NativeBaseProvider, 
  Modal, Stack, Heading, IconButton, 
  Icon, Button,  extendTheme, Text,
  Checkbox, Divider 
} from "native-base";
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { db } from '../firebaseConfig/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';


export default function Favorite() {
    const [cardInfo, setCardInfo] = useState(["This", "Should", "Be", "The", "Favorites", "Page"]);
    return (
        <NativeBaseProvider>
            <View style={styles.swipeContainer}>
                <Cards information={cardInfo}/>
            </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    topBar: {
      // position: 'center',
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignContent:'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginHorizontal: 20,
      maxHeight: 80,
      top: "20%",
      // top: 800,
    },
    navigationBar: {
      // position: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignContent:'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginHorizontal: 20,
      maxHeight: 80,
      top: "155%",
      // top: 800,
    },
    background: {
      // flex: 1,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#E8E8E8',
      alignSelf: 'center',
      top: "-8%",
      justifyContent: 'center',
      backgroundColor: 'red'
    },
    swipeContainer: {
      position: 'absolute',
      top: "-5%",
    },
    appContainer: {
      flex: 1,
      borderColor: 'black',
      backgroundColor: "#424242", 
    },
    container: {
      flex: 1,
      backgroundColor: '#424242'
    },
    card: {
      flex: 1,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#E8E8E8',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    text: {
      textAlign: 'center',
      fontSize: 50,
      backgroundColor: 'transparent'
    },
    done: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      backgroundColor: 'transparent'
    },
    navigationBarItems: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    filterModal: {
      flex: 1,
      // top: "200%",
    }
  })