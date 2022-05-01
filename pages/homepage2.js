import React, { Component, useState, useEffect } from 'react'
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, View, Modal, Text, Pressable, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

// import TopBar from '../components/topbar.js'
import Navbar from '../components/navbar.js'
import Cards from '../components/cards'
import { 
  Box, Center, NativeBaseProvider, 
   Stack, Heading, IconButton, 
  Icon, Button,  extendTheme,
  Checkbox, Divider, HStack, Spacer 
} from "native-base"; // took Text and Modal out
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { db } from '../firebaseConfig/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';



export default function Homepage({ navigation }) {
  const [showModal, setShowModal]  = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterSelected, setFilterSelected] = useState(false);

  const [musicFilterSelected, setMusicFilterSelected] = useState(false);
  const [sportsFilterSelected, setSportsFilterSelected] = useState(false);
  const [foodFilterSelected, setFoodFilterSelected] = useState(false);
  const [artFilterSelected, setArtFilterSelected] = useState(false);

  const [mondayFilter, setMondayFilter] = useState(false);
  const [tuesdayFilter, setTuesdayFilter] = useState(false);
  const [wednesdayFilter, setWednesdayFilter] = useState(false);
  const [thursdayFilter, setThursdayFilter] = useState(false);
  const [fridayFilter, setFridayFilter] = useState(false);
  const [saturdayFilter, setSaturdayFilter] = useState(false);
  const [sundayFilter, setSundayFilter] = useState(false);

  const [morningFilter, setMorningFilter] = useState(false);
  const [afternoonFilter, setAfternoonFilter] = useState(false);
  const [eveningFilter, setEveningFilter] = useState(false);

  const [cardInfo, setCardInfo] = useState([]);
  const [eventTypeFilter, setEventTypeFilter] = useState([]);
  const [dayTypeFilter, setDayTypeFilter] = useState([]);
  const [timeOfDayFilter, setTimeOfDayFilter] = useState([]);
  const [allFilters, setAllFilters] = useState([]);
  
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
        // console.log("Document data:", events);
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

      // musicFilterSelected ? console.log("this") : console.log("that");
      // console.log("eventFilters = ", eventFilters);
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

      // console.log("event type filter" , eventTypeFilter);
      // console.log("day type filter", dayTypeFilter);
  }
  
  useEffect(async () => {
    const getEventData = async () => {
      await getDocs(collection(db, "Events")).then(docSnap => {
        let events = [];
        docSnap.forEach((doc)=>{
          if(((eventTypeFilter.length === 0) || (eventTypeFilter.indexOf(doc.data().Type !== -1))) &&
          ((dayTypeFilter.length === 0) || (dayTypeFilter.indexOf(doc.data().DayOfWeek !== -1)))) {
            events.push({ ...doc.data(), id:doc.id})
          }
        });
        setCardInfo([...events]);
        // console.log("Document data:", events);
        // console.log("All Filter Data", allFilters);
        // console.log("Event Type Filter", eventTypeFilter);
        // console.log("Day Type Filter", dayTypeFilter);
      });
    };
    getEventData();
  },[allFilters]);

  // const config = {
  //   dependencies: {
  //     "linear-gradient": require("react-native-linear-gradient").default,
  //   },
  // };

  const config = {
    dependencies: {
      "linear-gradient": LinearGradient
    }
  };

  // console.log(usersCollection)
  return (
    <NativeBaseProvider config={config} theme={theme}>
    <View style={styles.appContainer}>
      <View style={styles.backgroundBox}>
        <Box 
          height="751" 
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
      <View style={styles.topBar}>
        <Box width="100%" height="10%"  rounded="lg" p={8} >
              <Center>
                  {/* <Stack direction="row" mb="2.5" space={2} style={styles.navigationBarItems}> */}
                  <HStack justifyContent="center" style={styles.navigationBarItems}>
                      <IconButton  width="16" height="16" icon={<Icon as={Ionicons} name="pin-sharp" size="12" color="muted.50" />} />
                      <Spacer/>
                      <Box size="lg" width="75%" rounded="sm" height="16" text={{
                          color: "white",
                          fontWeight: "medium"
                      }} >
                        <Heading color="white" size="xl">     Explore</Heading>
                        <Spacer/>
                        <Heading color="white" size="sm">        Austin, TX</Heading>
                      </Box>
                      {/* <Box alignSelf="center" bg="primary.500" height="16" _text={{
                      fontSize: "md",
                      fontWeight: "medium",
                      color: "warmGray.50",
                      letterSpacing: "lg"
                    }}>
                        This is a Box
                      </Box> */}
                      <Button colorScheme="light" variant="boxyButton" width="16" height="16" borderRadius={15} onPress={() => setModalVisible(true)}>
                          <Icon as={Ionicons} name="filter-sharp" size="10" color="muted.500" />
                      </Button>
                  </HStack>
                      <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.filterTitle}>Filters</Text>
                            <Divider/>
                            <Text style={styles.filterSubtitle}>Event Tags</Text>
                            <ScrollView style={styles.scrollView} horizontal indicatorStyle='black'>
                                <Stack direction="row">
                                    <Pressable
                                    style={[styles.button, musicFilterSelected ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setMusicFilterSelected(!musicFilterSelected);}}
                                    >
                                    <Text style={styles.textStyle}>Music</Text>
                                    </Pressable>
                                    <Pressable
                                    style={[styles.button, sportsFilterSelected ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setSportsFilterSelected(!sportsFilterSelected);}}
                                    >
                                    <Text style={styles.textStyle}>Sports</Text>
                                    </Pressable>
                                    <Pressable
                                    style={[styles.button, foodFilterSelected ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setFoodFilterSelected(!foodFilterSelected);}}
                                    >
                                    <Text style={styles.textStyle}>Food</Text>
                                    </Pressable>
                                    <Pressable
                                    style={[styles.button, artFilterSelected ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setArtFilterSelected(!artFilterSelected);}}
                                    >
                                    <Text style={styles.textStyle}>Art</Text>
                                    </Pressable>
                                </Stack>
                            </ScrollView>

                            <Divider/>

                            <Text style={styles.filterSubtitle}>Day</Text>
                            <ScrollView style={styles.scrollView} horizontal indicatorStyle='black'>
                                <Stack direction="row">
                                    <Pressable
                                    style={[styles.button, mondayFilter ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setMondayFilter(!mondayFilter);}}
                                    >
                                    <Text style={styles.textStyle}>Monday</Text>
                                    </Pressable>
                                    <Pressable
                                    style={[styles.button, tuesdayFilter ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setTuesdayFilter(!tuesdayFilter);}}
                                    >
                                    <Text style={styles.textStyle}>Tuesday</Text>
                                    </Pressable>
                                    <Pressable
                                    style={[styles.button, wednesdayFilter ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setWednesdayFilter(!wednesdayFilter);}}
                                    >
                                    <Text style={styles.textStyle}>Wednesday</Text>
                                    </Pressable>
                                    <Pressable
                                    style={[styles.button, thursdayFilter ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setThursdayFilter(!thursdayFilter);}}
                                    >
                                    <Text style={styles.textStyle}>Thursday</Text>
                                    </Pressable>
                                    <Pressable
                                    style={[styles.button, fridayFilter ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setFridayFilter(!fridayFilter);}}
                                    >
                                    <Text style={styles.textStyle}>Friday</Text>
                                    </Pressable>
                                    <Pressable
                                    style={[styles.button, saturdayFilter ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setSaturdayFilter(!saturdayFilter);}}
                                    >
                                    <Text style={styles.textStyle}>Saturday</Text>
                                    </Pressable>
                                    <Pressable
                                    style={[styles.button, sundayFilter ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setSundayFilter(!sundayFilter);}}
                                    >
                                    <Text style={styles.textStyle}>Sunday</Text>
                                    </Pressable>
                                </Stack>
                            </ScrollView>

                            <Divider/>

                            <Text style={styles.filterSubtitle}>Event Tags</Text>
                            <ScrollView style={styles.scrollView} horizontal indicatorStyle='black'>
                                <Stack direction="row">
                                    <Pressable
                                    style={[styles.button, morningFilter ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setMorningFilter(!morningFilter);}}
                                    >
                                    <Text style={styles.textStyle}>Morning</Text>
                                    </Pressable>
                                    <Pressable
                                    style={[styles.button, afternoonFilter ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setAfternoonFilter(!afternoonFilter);}}
                                    >
                                    <Text style={styles.textStyle}>Afternoon</Text>
                                    </Pressable>
                                    <Pressable
                                    style={[styles.button, eveningFilter ? styles.buttonClicked : styles.buttonUnClicked]}
                                    onPress={() => {setEveningFilter(!eveningFilter);}}
                                    >
                                    <Text style={styles.textStyle}>Evening</Text>
                                    </Pressable>
                                </Stack>
                            </ScrollView>

                            <Spacer/>

                            <HStack alignItems="flex-end">
                                <Spacer/>
                                <Pressable
                                style={[styles.button, styles.buttonUnClicked]}
                                onPress={() => { resetFilters() }}
                                >
                                <Text style={styles.textStyle}>Reset</Text>
                                </Pressable>
                                <Pressable
                                style={[styles.button, styles.buttonClicked]}
                                onPress={() => { setModalVisible(!modalVisible); addFilters();}}
                                >
                                <Text style={styles.textStyle}>Apply</Text>
                                </Pressable>
                            </HStack>
                        </View>
                        </View>
                    </Modal>
                  {/* </Stack> */}
              </Center>
          </Box>
      </View>
      <View style={styles.swipeContainer}>
        { cardInfo.length != 0 ? <Cards information={cardInfo}/> : null }
      </View>
      <View style={styles.navigationBar}>
        <Box width="100%" height="10%" rounded="lg" p={8} style={styles.navigationBarComponent}>
            <Center>
                <HStack justifyContent="center" style={styles.navigationBarItems}>
                    <IconButton width="16" height="16" onPress={() => navigation.navigate('Favorite')} icon={<Icon as={MaterialIcons} name="favorite" size="12" color="light.400" />} borderRadius="full" />
                    {/* <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="12" color="light.400" />} /> */}
                    <Spacer/>
                    <IconButton width="16" height="16" icon={<Icon as={MaterialIcons} name="filter" size="12" color="#F0635A" />} />
                    <Spacer/>
                    <IconButton width="16" height="16" icon={<Icon as={MaterialIcons} name="person" size="12" color="light.400" />} />
                </HStack>
            </Center>
        </Box>
      </View>
    </View>
    </NativeBaseProvider>
  );
}

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

//   navigationBarItems: {
//       flex: 1,
//       flexDirection: 'row',
//       backgroundColor: 'white',
//     },
//   filterModal: {
  //     flex: 1,
  //     top: "200%",
//   }
// });

const styles = StyleSheet.create({
  topBar: {
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
    top: "10%",
    // top: 800,
  },
  topBarText: {
      top: "50%",
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
    top: "87%",
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
    // position: 'absolute',
    flex: 1,
    borderColor: 'black',
    // backgroundColor: "#424242", 
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
  filterModal: {
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
})










// // // demo purposes only
// // function * range (start, end) {
// //   for (let i = start; i <= end; i++) {
// //     yield i
// //   }
// // }

// const typeFilter = [
//   "Music",
//   "Sports",
//   "Food",
//   "Art"
// ]

// const dayFilterOptions = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// ]

// function TopBar() {
//   const theme = extendTheme({
//     components: {
//       Button: {
//         variants: {
//           boxyButton: ({
//             colorScheme
//           }) => {
//             return {
//               bg: `${colorScheme}.50`,
//             };
//           }
//         }
//       },
//       Modal: {
//         variants: {
//           newDefault: ({
//             colorScheme
//           }) => {
//             return {
//               _light: {
//                 bg: `${colorScheme}.500`,
//                 _text: {
//                   color: 'text.900',
//                 },
//               },
//               _dark: {
//                 bg: `${colorScheme}.800`,
//                 _text: {
//                   color: 'text.50',
//                 },
//               },
//             };
//           }
//         }
//       }
//     }
//   });
  
//   const [showModal, setShowModal]  = useState(false);
//   const [cardInfo, setCardInfo] = useState([]);
//   const [eventTypeFilter, setEventTypeFilter] = useState([]);
//   const [dayTypeFilter, setDayTypeFilter] = useState([]);
  
//   function getData () {
//     getDocs(collection(db, "Events")).then(docSnap => {
//       let events = [];
//       docSnap.forEach((doc)=>{
//         if(((eventTypeFilter.length === 0) || (eventTypeFilter.indexOf(doc.data().Type !== -1))) &&
//           ((dayTypeFilter.length === 0) || (dayTypeFilter.indexOf(doc.data().DayOfWeek !== -1)))) {
//             events.push({ ...doc.data(), id:doc.id})
//           }
//       });
//       setCardInfo([...events]);
//       console.log("Document data:", events);
//     });
//   };

//   // const getEventTypeFilter = (e) => {
//   //   let eventTypeFilterData = eventTypeFilter;
//   //   let data = allFilters;
//   //   const index = data.indexOf(e);
//   //   if (index === -1) {
//   //     data.push(e);
//   //   } else {
//   //     data.splice(index, 1);
//   //   }
//   //   setAllFilters([...data]);
//   //   const typeIndex = eventTypeFilterData.indexOf(e);
//   //   if (typeIndex === -1) {
//   //     eventTypeFilterData.push(e);
//   //   } else {
//   //     eventTypeFilterData.splice(typeIndex, 1); // could just be index
//   //   }
//   //   setEventTypeFilter([...eventTypeFilterData]);
//   //   console.log("e: ", e);
//   //   console.log("Event Type Filter", eventTypeFilter);
//   // }

//   // const getDayTypeFilter = (e) => {
//   //   let dayTypeFilterData = dayTypeFilter;
//   //   let data = allFilters;
//   //   const index = data.indexOf(e.target.value);
//   //   if (index === -1) {
//   //     data.push(e.target.value);
//   //   } else {
//   //     data.splice(index, 1);
//   //   }
//   //   setAllFilter([...data]);
//   //   const dayIndex = dayTypeFilterData.index(e.target.value);
//   //   if (dayIndex === -1) {
//   //     dayTypeFilterData.push(e.target.value);
//   //   } else {
//   //     dayTypeFilterData.splice(dayIndex, 1);
//   //   }
//   //   setDayTypeFilter([...dayTypeFilterData]);
//   // }
  
//   console.log("Event Type: ", eventTypeFilter);
//   console.log("Separation")
//   console.log("Day Type: ", dayTypeFilter);

//   // function clearDayFilter () {
//   //   setDayTypeFilter("");
//   //   console.log("Button Clicked Day Type: ", dayTypeFilter);
//   // }

//   return(
//       <NativeBaseProvider theme={theme}>
//           <Box width="100%" height="10%"  rounded="lg" p={8} >
//               <Center>
//                   <Stack direction="row" mb="2.5" space={2} style={topBarStyles.navigationBarItems}>
//                       <IconButton  width="16" height="16" icon={<Icon as={Ionicons} name="pin-sharp" size="12" color="muted.50" />} />
//                       <Box size="lg" width="70%" rounded="sm" _text={{
//                       color: "white",
//                       fontWeight: "medium"
//                       }} >
//                           <Heading color="white">Explore</Heading>
//                           Austin, TX
//                       </Box>
//                       <Button colorScheme="light" variant="boxyButton" width="16" height="16" borderRadius={15} onPress={() => setShowModal(true)}>
//                           <Icon as={Ionicons} name="filter-sharp" size="10" color="muted.500" />
//                       </Button>
//                       <Modal isOpen={showModal} onClose={() => setShowModal(false)} style={topBarStyles.filterModal}>
//                         <Modal.Content maxWidth="400px" height="500px" colorScheme="orange" variant="newDefault">
//                           <Modal.CloseButton />
//                           <Modal.Header>Filters</Modal.Header>
//                           <Modal.Body>
//                             <Heading fontSize="md">Event Type:</Heading>
//                             <Checkbox.Group onChange={setEventTypeFilter} value={eventTypeFilter}>
//                               <Checkbox value="Music">Music</Checkbox>
//                               <Checkbox value="Sports">Sports</Checkbox>
//                               <Checkbox value="Food">Food</Checkbox>
//                               <Checkbox value="Art">Art</Checkbox>
//                             </Checkbox.Group>
                            

//                             <Divider my={4}/>

//                             <Heading fontSize="md">Day of the Week:</Heading>
//                             <Checkbox.Group onChange={setDayTypeFilter} value={dayTypeFilter}>
//                               <Checkbox value="Monday">Monday</Checkbox>
//                               <Checkbox value="Tuesday">Tuesday</Checkbox>
//                               <Checkbox value="Wednesday">Wednesday</Checkbox>
//                               <Checkbox value="Thursday">Thursday</Checkbox>
//                               <Checkbox value="Friday">Friday</Checkbox>
//                               <Checkbox value="Saturday">Saturday</Checkbox>
//                               <Checkbox value="Sunday">Sunday</Checkbox>
//                             </Checkbox.Group>

//                             <Divider my={4}/>

//                             {/* <Button onPress={() => clearDayFilter} value={[]} >Reset Filter</Button> */}

//                           </Modal.Body>
//                         </Modal.Content>
//                       </Modal>
//                   </Stack>
//               </Center>
//           </Box>
//       </NativeBaseProvider>
//   );
// }

// const topBarStyles = StyleSheet.create({
//   navigationBarItems: {
//       flex: 1,
//       flexDirection: 'row',
//       backgroundColor: 'white',
//     },
//   filterModal: {
//     flex: 1,
//     top: "200%",
//   }
// });
























































// const topBarStyles = StyleSheet.create({