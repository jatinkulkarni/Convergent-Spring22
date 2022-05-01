import React from "react";
import { Button, StyleSheet, Text, View, Box, Image, ActionSheetIOS } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Ionicons } from '@expo/vector-icons'; 
import { Icon, VStack, Stack, Actionsheet, useDisclose, Divider } from 'native-base'



export default function Cards( { information }) {
  // const [index, setIndex] = React.useState(0);
  // const onSwiped = () => {
  //   transitionRef.current.animateNextTransition();
  //   setIndex((index + 1) % data.length);
  // };

  const Card = ({ card, index }) => {
    return(
      <View style={styles.card}>
        <Text>{card}</Text>
      </View>
    )
  } 

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "hello",
        message: "world",
        options: ["Cancel", "Generate number", "Reset"],
        // destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark'
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          console.log("button 1");
        } else if (buttonIndex === 2) {
          console.log("button 2");
        }
      }
    );

    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclose();


  return(
      <View>
        <Swiper
            cards={information}
            renderCard={(card) => {
                return (
                    <View style={styles.card}>
                      <Image
                        style={styles.cardPhoto}
                        // source={require('../assets/photos/Convergent.png')}
                        source={require('../assets/photos/Shawn-Mendes.jpeg')}
                        // source={card.Picture}
                      />
                      <View style={styles.cardInformation}>
                        <VStack space="2" mt="4" px="4">
                          <Text style={{fontSize: 22, fontFamily: 'Kailasa-Bold'}}>{card.Organizer} | {card.Title}</Text>
                          <Stack direction="row" mb="1.5" mt="1" space={3}>
                            <Icon as={Ionicons} name="calendar-outline" size="5" color="red.500" />
                            <Text style={{fontSize: 12, fontFamily: 'Kailasa'}}>{card.DayOfWeek}</Text>
                          </Stack>
                          <Stack direction="row" mb="1.5" mt="1" space={3}>
                            <Icon as={Ionicons} name="location-outline" size="5" color="red.500" />
                            <Text style={{fontSize: 12, fontFamily: 'Kailasa'}}>{card.Location}</Text>
                          </Stack>
                        </VStack>
                      </View>
                    </View>
                )
            }}
            // renderCard={card => <Card card={card}/>}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            // onTapCard={onPress}
            onTapCard={onOpen}
            cardIndex={0}
            backgroundColor={'#4FD0E9'}
            cardVerticalMargin={230}
            stackSize= {5}
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
        >
          
            <Button
                onPress={() => {console.log('oulala')}}
                title="Press me">
                You can press me
            </Button>
        </Swiper>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
          <Image
              style={styles.cardPhotoPopUp}
              // source={require('../assets/photos/Convergent.png')}
              source={require('../assets/photos/Shawn-Mendes.jpeg')}
              // source={card.Picture}
            />
            <Text style={{fontSize: 22, fontFamily: 'Kailasa-Bold', marginTop: 10}}>Location:</Text>
            <Text style={{fontSize: 18, fontFamily: 'Kailasa', marginTop: 10}}>Moody Center, Austin Texas</Text>
            <Divider/>
            <Text style={{fontSize: 22, fontFamily: 'Kailasa-Bold', marginTop: 10}}>Date and Time:</Text>
            <Text style={{fontSize: 18, fontFamily: 'Kailasa', marginTop: 10}}>Monday October 3, 2022</Text>
            <Text style={{fontSize: 18, fontFamily: 'Kailasa', marginTop: 10}}>7:00 PM - 9:00 PM</Text>
            <Divider/>
            <Text style={{fontSize: 22, fontFamily: 'Kailasa-Bold', marginTop: 10}}>About:</Text>
            <Text style={{fontSize: 18, fontFamily: 'Kailasa', marginTop: 10}}>Join Shawn Mendes on his fifth concert tour to celebrate the release of his fourth studio album: Wonder. In the brand new Moody Center, brace yourself for a night of awe-worthy love balads and melodic pop tunes.</Text>
          </Actionsheet.Content>
        </Actionsheet>
      </View>
    )
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      borderRadius: 4,
      width: '100%',
    //   height: 10,
      alignSelf: 'center',
      // borderWidth: 1,
      borderColor: '#E8E8E8',
    //   justifyContent: 'center',
      backgroundColor: 'gray'
    },
    cardInformation: {
      flex: 1,
      position: 'absolute',
      alignSelf: 'center',
      width: '100%',
      height: '35%',
      top: "70%",
      backgroundColor:'white',
    },
    text: {
      textAlign: 'center',
      fontSize: 50,
      backgroundColor: 'transparent'
    },
    cardPhoto: {
      height: '100%',
      width: '100%'
    },
    cardPhotoPopUp: {
      height: '50%',
      width: '100%',
      borderRadius: 20,
    }
  })