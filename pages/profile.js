import React, { Component, useState  } from 'react'
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const ProfileScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style = {styles.container}>
            <StatusBar style="auto" />
           <View style = {styles.inputView}>
           <TextInput
                style={styles.TextInput}
                placeholder = "Username"
                placeholderTextColor = "3003f5c"
                onChangeText={(email) => setEmail(email)}
            />
            </View> 

        </View>
    );
};


export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#808080",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        width: "80%",
        height: 55,
        marginBottom: 20,

        
        alignItems: 'center'
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20.
    },
});