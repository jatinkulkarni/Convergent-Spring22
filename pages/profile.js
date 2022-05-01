import React, { Component, useState, useEffect } from 'react'
import { StatusBar } from "expo-status-bar";
import Navbar from '../components/navbar.js';

import {
  StyleSheet,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import {MaterialIcons} from "@expo/vector-icons";

import { 
    Box, Center, NativeBaseProvider, 
     Stack, Heading, IconButton, 
    Icon, Button,  extendTheme,
    Checkbox, Divider, HStack, Spacer 
  } from "native-base"

  function getData () {
    getDocs(collection(db, "Events")).then(docSnap => {
      let events = [];
      docSnap.forEach((doc)=>{
        if(((eventTypeFilter.length === 0) || (eventTypeFilter.indexOf(doc.data().Type !== -1))) &&
          ((dayTypeFilter.length === 0) || (dayTypeFilter.indexOf(doc.data().DayOfWeek !== -1)))) {
            events.push({ ...doc.data(), id:doc.id})
          }
        });
        setCardInfo([...events]);
        console.log("Document data:", events);
    });
  };

  function resetFilters () {
    setMusicFilterSelected(false);
    setSportsFilterSelected(false);
    setFoodFilterSelected(false);
    setArtFilterSelected(false);

    setEventTypeFilter([]);

    setMondayFilter(false);
    setTuesdayFilter(false);
    setWednesdayFilter(false);
    setThursdayFilter(false);
    setFridayFilter(false);
    setSaturdayFilter(false);
    setSundayFilter(false);

    setDayTypeFilter([]);

    setMorningFilter(false);
    setAfternoonFilter(false);
    setEveningFilter(false);

    setTimeOfDayFilter([]);
}


function addFilters () {
    let eventFilters = [];
    musicFilterSelected ? eventFilters.push("Music") : null;
    sportsFilterSelected ? eventFilters.push("Sports") : null;
    foodFilterSelected ? eventFilters.push("Food") : null;
    artFilterSelected ? eventFilters.push("Art"): null;

    setEventTypeFilter([...eventFilters]);

    let dayFilters = [];
    mondayFilter ? dayFilters.push("Monday") : null;
    tuesdayFilter ? dayFilters.push("Tuesday") : null;
    wednesdayFilter ? dayFilters.push("Wednesday") : null;
    thursdayFilter ? dayFilters.push("Thursday") : null;
    fridayFilter ? dayFilters.push("Friday") : null;
    saturdayFilter ? dayFilters.push("Sunday") : null;
    sundayFilter ? dayFilters.push("Saturday") : null;

    setDayTypeFilter([...dayFilters]);

    let timeTypeFilters = [];
    morningFilter ? timeTypeFilters.push("Morning") : null;
    afternoonFilter ? timeTypeFilters.push("Afternoon") : null;
    eveningFilter ?  timeTypeFilters.push("Evening") : null;

    setTimeOfDayFilter([...timeTypeFilters]);

    musicFilterSelected ? console.log("this") : console.log("that");
    console.log("eventFilters = ", eventFilters);
  //   setEventTypeFilter([musicFilterSelected]);
  //   setEventTypeFilter([...sportsFilterSelected]);
  //   setEventTypeFilter([...setFoodFilterSelected]);
  //   setEventTypeFilter([...artFilterSelected]);

  //   setDayTypeFilter([mondayFilter]);
  //   setDayTypeFilter([...tuesdayFilter]);
  //   setDayTypeFilter([...wednesdayFilter]);
  //   setDayTypeFilter([...thursdayFilter]);
  //   setDayTypeFilter([...fridayFilter]);
  //   setDayTypeFilter([...saturdayFilter]);
  //   setDayTypeFilter([...sundayFilter]);

    console.log("event type filter" , eventTypeFilter);
    console.log("day type filter", dayTypeFilter);
}

  
// useEffect(async () => {
//     const getEventData = async () => {
//       await getDocs(collection(db, "Events")).then(docSnap => {
//         let events = [];
//         docSnap.forEach((doc)=>{
//           if(((eventTypeFilter.length === 0) || (eventTypeFilter.indexOf(doc.data().Type !== -1))) &&
//           ((dayTypeFilter.length === 0) || (dayTypeFilter.indexOf(doc.data().DayOfWeek !== -1)))) {
//             events.push({ ...doc.data(), id:doc.id})
//           }
//         });
//         setCardInfo([...events]);
//         console.log("Document data:", events);
//         // console.log("All Filter Data", allFilters);
//         // console.log("Event Type Filter", eventTypeFilter);
//         // console.log("Day Type Filter", dayTypeFilter);
//       });
//     };
//     getEventData();
//   },[allFilters]);

const ProfileScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    return (
        <View style = {styles.container}>
            <StatusBar style="auto" />
            <View style = {styles.image}>
                <Image 
                source = {require("../assets/images-1.jpg")}
                style={{width: 100, height: 100, borderRadius: 400/ 2}} 
                />
            </View>
            

            <View style = {styles.loginBtn}>
            <Stack direction="row">
            <TouchableOpacity style = {styles.Btn}>
                   
            </TouchableOpacity>
            </Stack>

            </View>

            

            <View style = {styles.navigationBar}>
                <Navbar/>
            </View>

              {/* <View style ={styles.navigationBar}>
                <Navbar/>
            </View> */}
            {/* 

            {/* <TouchableOpacity style = {styles.loginBtn}>
                <Text style = {styles.loginText}> edit profile</Text>
            </TouchableOpacity>
            <Text style = {styles.forgot_botton}>
                <Text style = {styles.forgot_botton}> Interests</Text> 
            </Text> */}
           
            {/* <View style ={styles.navigationBar}>
                <Navbar/>
            </View> */}
            {/* 
            
            <TouchableOpacity style = {styles.loginBtn}>
                <Text style = {styles.loginText}>SIGN IN

                </Text>
            </TouchableOpacity>

            <Text>
                OR
            </Text>
            <TouchableOpacity style = {styles.loginBtn}>
                <Text style = {styles.loginText}>Google</Text>
            </TouchableOpacity> */}

        </View>
    );
};


export default ProfileScreen;

const theme = extendTheme({
    components: {
      Button: {
        variants: {
          boxyButton: ({
            colorScheme
          }) => {
            return {
              bg: `${colorScheme}.50`,
            };
          }
        }
      },
      Modal: {
        variants: {
          newDefault: ({
            colorScheme
          }) => {
            return {
              _light: {
                bg: `${colorScheme}.500`,
                _text: {
                  color: 'text.900',
                },
              },
              _dark: {
                bg: `${colorScheme}.800`,
                _text: {
                  color: 'text.50',
                },
              },
            };
          }
        }
      }
    }
  });



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#808080",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 0,
       // image: "./aceja/Downloads/download.png",

    },
    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        width: "80%",
        height: 55,
        marginBottom: 20,
        //alignItems: 'center'
    },
    baseText: {
      fontFamily: ""  
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20.
    },
    forgot_botton: {
        height: 30,
        //marginBottom: 30,
    },
    loginBtn: {
        width: "95%",
        borderRadius: 25,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        //marginTop: -2,
        marginHorizontal: 10,
        backgroundColor: "#FFFFFF"
    },
    Btn: {
        width: "30%",
        borderRadius: 25,
        height: 40,
        position: 'absolute',
        right: 45,
        top: -60,
        //alignItems: "center",
        //justifyContent: "center",
        //marginTop: -2,
        marginHorizontal: 10,
        backgroundColor: "#F0635A"
    },
    image: {
        marginTop: "100%",
        //marginBottom: 40,
        width: 200,
        height: 250,
        alignItems: "center",
        justifyContent: "center",
        // borderRadius: 600,
      },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    height: 400,
    width: "100%",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    width: 100,
    height: 35,
    margin: 3,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonUnClicked: {
    backgroundColor: "#C4C4C4",
  },
  buttonClicked: {
    backgroundColor: "#F0635A",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left"
  },
  scrollView: {
    marginBottom: 10,
    height: 1,
  },
  filterTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10
  },
  filterSubtitle: {
    fontSize: 15,
    marginVertical: 5,
  },
});

