import React, { Component, useState, useEffect } from 'react'
import Swiper from 'react-native-deck-swiper'
// import { StyleSheet, View } from 'react-native'
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import TopBar from '../components/topbar.js'
import Navbar from '../components/navbar.js'
import Cards from '../components/cards'
import { VStack, Center, useTheme, Heading, NativeBaseProvider, Button, Box, Divider } from "native-base";
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { db } from '../firebaseConfig/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import SavedCards from '../components/savedCards.js';
import { useFonts } from 'expo-font';
import Public_Sans_font from '../assets/PublicSans-Light.ttf';


export default function Favorite() {
    // const [cardInfo, setCardInfo] = useState(["This", "Should", "Be", "The", "Favorites", "Page"]);
    const [allFilters, setAllFilters] = useState([]);
    const [cardInfo, setCardInfo] = useState([]);

    // const [loaded] = useFonts({
    //   Public_Sans: require('../assets/PublicSans-Light.ttf'),
    // });

    // if (!loaded) {
    //   return null;
    // }

    // const styles = StyleSheet.create({
    //   baseText: {
    //     fontFamily: "Roboto"
    //   },
    //   titleText: {
    //     fontSize: 20,
    //     fontWeight: "bold"
    //   }
    // });

    useEffect(async () => {
      const getEventData = async () => {
        await getDocs(collection(db, "Events")).then(docSnap => {
          setCardInfo([]);
          const events = []; // let
          docSnap.forEach((doc)=>{
            events.push({ ...doc.data(), id:doc.id})
            // if(((eventTypeFilter.length === 0) || (eventTypeFilter.indexOf(doc.data().Type !== -1))) &&
            // ((dayTypeFilter.length === 0) || (dayTypeFilter.indexOf(doc.data().DayOfWeek !== -1)))) {
            //   events.push({ ...doc.data(), id:doc.id})
            // }
          });
          setCardInfo([...events]);
          console.log({cardInfo});
          console.log("Document data:", events);
          console.log("in favorite page");
          // console.log("All Filter Data", allFilters);
          // console.log("Event Type Filter", eventTypeFilter);
          // console.log("Day Type Filter", dayTypeFilter);
        });
      };
      getEventData();
    },[allFilters]);

    const savedCardInfo = cardInfo.map((cardData) =>
    <SavedCards information={cardData}/>);

    return (
        // <NativeBaseProvider>
        //     <View style={styles.swipeContainer}>
        //         <Cards information={cardInfo}/>
        //     </View>
        // </NativeBaseProvider>
        <NativeBaseProvider>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              {/* {savedCardInfo} */}
              <VStack spacing={5}>
                  {cardInfo.map((cardData) => (
                    // <SavedCards information = {cardData}/>
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