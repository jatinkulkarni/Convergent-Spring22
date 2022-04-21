import React from "react";
import { VStack, Stack, Heading, HStack, IconButton, Icon, NativeBaseProvider, Button, Center, Box, StatusBar, extendTheme } from "native-base";
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons, Feather } from '@expo/vector-icons'; 
import NativeVibration from "react-native/Libraries/Vibration/NativeVibration";

export default function TopBar() {
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
          }
        }
      });

    return(
        <NativeBaseProvider theme={theme}>
            <Box width="100%" height="10%"  rounded="lg" p={8} >
                <Center>
                    <Stack direction="row" mb="2.5" space={2} style={styles.navigationBarItems}>
                        {/* <IconButton icon={<Icon as={Ionicons} name="pin-sharp" size="12" color="light.400" />} />
                        <Text fontSize="6xl">6xl</Text>
                        <IconButton colorScheme="light" variant="solid" width="16" icon={<Icon as={Ionicons} name="filter-sharp" size="10" color="light.400" />} /> */}
                        <IconButton  width="16" height="16" icon={<Icon as={Ionicons} name="pin-sharp" size="12" color="muted.50" />} />
                        <Box size="lg" width="70%" rounded="sm" _text={{
                        color: "white",
                        fontWeight: "medium"
                        }} >
                            <Heading color="white">Explore</Heading>
                            Austin, TX
                        </Box>
                        <Button colorScheme="light" variant="boxyButton" width="16" height="16" borderRadius={15}>
                            <Icon as={Ionicons} name="filter-sharp" size="10" color="muted.500" />
                        </Button>
                    </Stack>
                </Center>
            </Box>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    navigationBar: {
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
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        // justifyContent: 'space-evenly',
        // alignContent:'center',
        // alignItems: 'center',
        // alignSelf: 'center',
        // marginHorizontal: 20,
        // height: 80,
        // top: 800,
      },
});