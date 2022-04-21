import React, { Component, useState } from 'react'
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, View } from 'react-native'

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

// // demo purposes only
// function * range (start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i
//   }
// }

const typeFilter = [
  "Music",
  "Sports",
  "Food",
  "Art"
]

const dayFilterOptions = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

function getData () {
  getDocs(collection(db, "Events")).then(docSnap => {
    let events = [];
    docSnap.forEach((doc)=>{
      events.push({ ...doc.data(), id:doc.id})
    });
    console.log("Document data:", events);

  });
};

function TopBar() {
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

  const [showModal, setShowModal]  = useState(false);
  const [allFilters, setAllFilters] = useState([]);
  const [eventTypeFilter, setEventTypeFilter] = useState([]);
  const [dayTypeFilter, setDayTypeFilter] = useState([]);

  const getEventTypeFilter = (e) => {
    let eventTypeFilterData = eventTypeFilter;
    let data = allFilters;
    const index = data.indexOf(e);
    if (index === -1) {
      data.push(e);
    } else {
      data.splice(index, 1);
    }
    setAllFilters([...data]);
    const typeIndex = eventTypeFilterData.indexOf(e);
    if (typeIndex === -1) {
      eventTypeFilterData.push(e);
    } else {
      eventTypeFilterData.splice(typeIndex, 1); // could just be index
    }
    setEventTypeFilter([...eventTypeFilterData]);
    console.log("e: ", e);
    console.log("Event Type Filter", eventTypeFilter);
  }

  const getDayTypeFilter = (e) => {
    let dayTypeFilterData = dayTypeFilter;
    let data = allFilters;
    const index = data.indexOf(e.target.value);
    if (index === -1) {
      data.push(e.target.value);
    } else {
      data.splice(index, 1);
    }
    setAllFilter([...data]);
    const dayIndex = dayTypeFilterData.index(e.target.value);
    if (dayIndex === -1) {
      dayTypeFilterData.push(e.target.value);
    } else {
      dayTypeFilterData.splice(dayIndex, 1);
    }
    setDayTypeFilter([...dayTypeFilterData]);
  }
  
  console.log("Event Type: ", eventTypeFilter);
  console.log("Separation")
  console.log("Day Type: ", dayTypeFilter);

  // function clearDayFilter () {
  //   setDayTypeFilter("");
  //   console.log("Button Clicked Day Type: ", dayTypeFilter);
  // }

  return(
      <NativeBaseProvider theme={theme}>
          <Box width="100%" height="10%"  rounded="lg" p={8} >
              <Center>
                  <Stack direction="row" mb="2.5" space={2} style={topBarStyles.navigationBarItems}>
                      <IconButton  width="16" height="16" icon={<Icon as={Ionicons} name="pin-sharp" size="12" color="muted.50" />} />
                      <Box size="lg" width="70%" rounded="sm" _text={{
                      color: "white",
                      fontWeight: "medium"
                      }} >
                          <Heading color="white">Explore</Heading>
                          Austin, TX
                      </Box>
                      <Button colorScheme="light" variant="boxyButton" width="16" height="16" borderRadius={15} onPress={() => setShowModal(true)}>
                          <Icon as={Ionicons} name="filter-sharp" size="10" color="muted.500" />
                      </Button>
                      <Modal isOpen={showModal} onClose={() => setShowModal(false)} style={topBarStyles.filterModal}>
                        <Modal.Content maxWidth="400px" height="450px" colorScheme="orange" variant="newDefault">
                          <Modal.CloseButton />
                          <Modal.Header>Filters</Modal.Header>
                          <Modal.Body>
                            <Heading fontSize="md">Event Type:</Heading>
                            <Checkbox.Group onChange={setEventTypeFilter} value={eventTypeFilter}>
                              <Checkbox value="Music">Music</Checkbox>
                              <Checkbox value="Sports">Sports</Checkbox>
                              <Checkbox value="Food">Food</Checkbox>
                              <Checkbox value="Art">Art</Checkbox>
                            </Checkbox.Group>
                            

                            <Divider my={4}/>

                            <Heading fontSize="md">Day of the Week:</Heading>
                            <Checkbox.Group onChange={setDayTypeFilter} value={dayTypeFilter}>
                              <Checkbox value="Monday">Monday</Checkbox>
                              <Checkbox value="Tuesday">Tuesday</Checkbox>
                              <Checkbox value="Wednesday">Wednesday</Checkbox>
                              <Checkbox value="Thursday">Thursday</Checkbox>
                              <Checkbox value="Friday">Friday</Checkbox>
                              <Checkbox value="Saturday">Saturday</Checkbox>
                              <Checkbox value="Sunday">Sunday</Checkbox>
                            </Checkbox.Group>

                            <Divider my={4}/>

                            {/* <Button onPress={() => clearDayFilter} value={[]} >Reset Filter</Button> */}

                          </Modal.Body>
                        </Modal.Content>
                      </Modal>
                  </Stack>
              </Center>
          </Box>
      </NativeBaseProvider>
  );
}

const topBarStyles = StyleSheet.create({
  navigationBarItems: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
    },
  filterModal: {
    flex: 1,
    top: "200%",
  }
});


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