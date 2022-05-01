import React, { Component, useState, useEffect } from 'react'
import Swiper from 'react-native-deck-swiper'
// import { StyleSheet, View } from 'react-native'
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import TopBar from '../components/topbar.js'
import Navbar from '../components/navbar.js'
import Cards from '../components/cards'
import { VStack, HStack, Center, useTheme, 
          Heading, NativeBaseProvider, Button, 
          Box, Divider, IconButton, Icon, Spacer 
        } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { db } from '../firebaseConfig/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import SavedCards from '../components/savedCards.js';
import { useFonts } from 'expo-font';
import Public_Sans_font from '../assets/PublicSans-Light.ttf';
import { LinearGradient } from 'expo-linear-gradient';


export default function Favorite({navigation}) {
    const [allFilters, setAllFilters] = useState([]);
    const [cardInfo, setCardInfo] = useState([]);

    useEffect(async () => {
      const getEventData = async () => {
        await getDocs(collection(db, "Events")).then(docSnap => {
          setCardInfo([]);
          const events = []; // let
          docSnap.forEach((doc)=>{
            events.push({ ...doc.data(), id:doc.id})
          });
          setCardInfo([...events]);
          console.log({cardInfo});
          console.log("Document data:", events);
          console.log("in favorite page");
        });
      };
      getEventData();
    },[allFilters]);

    const config = {
      dependencies: {
        "linear-gradient": LinearGradient
      }
    };

    return (
        <NativeBaseProvider config={config}>
          <SafeAreaView style={styles.container}>
            <View style={styles.backgroundBox}>
              <Box 
                height="850" 
                width="425" 
                bg={{
                  linearGradient: {
                    colors: ["rose.700", "rose.50"],
                    start: [.5, .1],
                    end: [1, 1],
                  },
                }}
                rounded={30}/>
            </View>
            <ScrollView style={styles.scrollView}>
              <VStack spacing={5}>
                  {cardInfo.map((cardData) => (
                    <Box border="1" borderRadius="md" bg="light.50" m="5">
                      <VStack space="4" > 
                        <Box px="4" pt="4">
                          <Text style={{fontSize: 20, fontFamily: 'Kailasa-Bold'}}>{cardData.Title}</Text>
                        </Box>
                        <Box px="4">
                          <Text style={{fontFamily: 'Kailasa'}}>About: {cardData.About}</Text>
                        </Box>
                        <Box px="4" pb="4">
                          <Text style={{fontFamily: 'Kailasa'}}>Location: {cardData.Location}</Text>
                        </Box>
                      </VStack>
                    </Box>
                  ))}
              </VStack>
            </ScrollView>
          </SafeAreaView>
        </NativeBaseProvider>
    )
}
// divider={<Divider />}

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
    backgroundBox: {
      position: 'absolute',
      justifyContent: 'space-evenly',
      alignContent:'center',
      alignItems: 'center',
      alignSelf: 'center',
      top: "-5%",
    },
    navigationBar: {
      position: 'absolute',
      // position: 'center',
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignContent:'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginHorizontal: 20,
      maxHeight: 80,
      top: "92%",
      // top: 800,
    },
    navigationBarComponent: {
      // position: 'center',
      flex: 1,
      borderRadius: 30,
      flexDirection: 'column',
      // justifyContent: 'space-evenly',
      // alignContent:'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginHorizontal: 20,
      // height: 80,
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
      // backgroundColor: '#424242'
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
      // position: 'center',
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignContent:'center',
      alignItems: 'center',
      // alignSelf: 'center',
      // marginHorizontal: 20,
      // height: 80,
      // top: 800,
    },
    filterModal: {
      flex: 1,
      // top: "200%",
    }
  })