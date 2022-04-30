import React from "react";
import { Button, StyleSheet, Text, View, Box } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Ionicons } from '@expo/vector-icons'; 
import { Icon, VStack, Stack } from 'native-base'



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

  return(
        <Swiper
            cards={information}
            renderCard={(card) => {
              // console.log("Information In card.js", information)
                return (
                    <View style={styles.card}>
                      {/* <Image source={require({card.picPath})} */}
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
                          {/* <Stack direction="column" mb="2" mt="1" space={3}>
                            <Text>About</Text>
                            <Text style={{fontSize: 12, fontFamily: 'Kailasa'}}>{card.About}</Text>
                          </Stack> */}
                        </VStack>
                      </View>
                    </View>
                )
            }}
            // renderCard={card => <Card card={card}/>}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
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
  })