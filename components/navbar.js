import React from "react";
import { VStack, HStack, IconButton, Icon, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { Button, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import NativeVibration from "react-native/Libraries/Vibration/NativeVibration";

export default function NavBar() {
    return(
        <Box width="100%" height="20%" bg="transparent" rounded="lg" p={8} style={styles.navigationBar}>
            <Center>
                <HStack justifyContent="center" style={styles.navigationBarItems}>
                    <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="12" color="light.400" />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="filter" size="12" color="light.400" />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="person" size="12" color="light.400" />} />
                </HStack>
            </Center>
        </Box>
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
         //height: 80,
        top: 100,
    },
    navigationBarItems: {
        // position: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent:'center',
        alignItems: 'center',
        // alignSelf: 'center',
        // marginHorizontal: 20,
        // height: 80,
        // top: 800,
      },
});