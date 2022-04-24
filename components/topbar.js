import React from "react";
import { VStack, Stack, Heading, HStack, IconButton, Icon, NativeBaseProvider, Button, Center, Box, StatusBar, extendTheme } from "native-base";
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons, Feather } from '@expo/vector-icons'; 
import NativeVibration from "react-native/Libraries/Vibration/NativeVibration";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TopBar({ navigation }) {
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
                        <IconButton  width="16" height="16" onPress={() => navigation.navigate('Favorite')} icon={<Icon as={Ionicons} name="pin-sharp" size="12" color="muted.50" />} />
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
        flex: 1,
        borderRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    navigationBarItems: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
      },
});