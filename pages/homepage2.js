import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View } from 'react-native'

import TopBar from '../components/topbar.js'
import Navbar from '../components/navbar.js'
import Cards from '../components/cards'
import { Box, Center, NativeBaseProvider, useScreenReaderEnabled } from "native-base";
import { db } from '../firebaseConfig/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';

// demo purposes only
function * range (start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}
function getData () {
  getDocs(collection(db, "Events")).then(docSnap => {
    let events = [];
    docSnap.forEach((doc)=>{
      events.push({ ...doc.data(), id:doc.id})
    });
    console.log("Document data:", events);

  });
};


export default function homepage() {
  // console.log(usersCollection)
  return (
    <NativeBaseProvider>
    <View style={styles.appContainer}>
      {/* <NativeBaseProvider> */}
      <View style={styles.swipeContainer}>
        <Cards/>
      </View>
        <View style={styles.topBar}>
          <TopBar/>
        </View>
        <View style={styles.navigationBar}>
          <Navbar/>
        </View>
      {/* </NativeBaseProvider> */}
    </View>
    </NativeBaseProvider>
  );
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
    top: "30%",
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
    top: "165%",
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
})