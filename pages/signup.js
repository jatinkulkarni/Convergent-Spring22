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

const SignUpScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style = {styles.container}> 
         <StatusBar style="auto" />
         <View style = {styles.TextInput}>
             
         </View>



        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#808080",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       // image: "./aceja/Downloads/download.png",
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
    forgot_botton: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
       // marginTop: -2,
        backgroundColor: "#F89880"
    },
   
});