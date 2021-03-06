import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View } from 'react-native'

import TopBar from '../components/topbar.js'
import Navbar from '../components/navbar.js'
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
    // console.log("Document data:", events);

  });
};

class Exemple extends Component {

  constructor (props) {
    super(props)
    this.state = {
      cards: [...range(1, 50)],
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0
    }
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card} - {index}</Text>
      </View>
    )
  };
  
  onSwiped = (type) => {
    console.log(`on swiped ${type}`)
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render () {
    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          // onSwiped={() => this.onSwiped('general')}
          onSwiped={getData}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={230}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: 'BLEAH',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            },
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: 'SUPER LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard

          // cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
          // getData
          // // cards={events}
          //   renderCard={(card) => {
          //       return (
          //           <View style={styles.card}>
          //               <Text style={styles.text}>{card}</Text>
          //           </View>
          //       )
          //   }}
          //   onSwiped={(cardIndex) => {console.log(cardIndex)}}
          //   onSwipedAll={() => {console.log('onSwipedAll')}}
          //   cardIndex={0}
          //   backgroundColor={'#4FD0E9'}
          //   stackSize= {3}
        >
          <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
        </Swiper>
      </View>
    )
  }
}

// const config = {
//   dependencies: {
//     "linear-gradient": require("react-native-linear-gradient").default,
//   },
// };





export default function homepage() {
  // console.log(usersCollection)
  return (
    <NativeBaseProvider>
    <View style={styles.appContainer}>
      {/* <NativeBaseProvider> */}
      <View style={styles.swipeContainer}>
        <Exemple/>
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