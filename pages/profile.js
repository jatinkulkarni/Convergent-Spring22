import React, { Component, useState  } from 'react'
import { StatusBar } from "expo-status-bar";
import Navbar from '../components/navbar.js';
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
            <View style = {styles.image}>
                <Image 
                source = {require("../assets/images-1.jpg")}
                style={{width: 200, height: 200, borderRadius: 400/ 2}} 
                />
            </View>
            <TouchableOpacity style = {styles.loginBtn}>
                <Text style = {styles.loginText}> edit profile</Text>
            </TouchableOpacity>
            <Text style = {styles.forgot_botton}>
                <Text style = {styles.forgot_botton}> Interests</Text> 
            </Text>
            <View style = {styles.inputView}>
           <TextInput
                style={styles.TextInput}
                placeholder = "Username"
                placeholderTextColor = "3003f5c"
                onChangeText={(email) => setEmail(email)}
            />
            </View> 
            <View style = {styles.inputView}>
                <TextInput
                style = {styles.TextInput}
                placeholder = "your password"
                placeholderTextColor="#3003f5c"
                secureTextEntry={true}
                onChangeText = {(password) => setPassword(password)}
                />
            </View>
            <View style ={styles.navigationBar}>
                <Navbar/>
            </View>
            {/* 
            
            <TouchableOpacity style = {styles.loginBtn}>
                <Text style = {styles.loginText}>SIGN IN

                </Text>
            </TouchableOpacity>

            <Text>
                OR
            </Text>
            <TouchableOpacity style = {styles.loginBtn}>
                <Text style = {styles.loginText}>Google</Text>
            </TouchableOpacity> */}

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
    baseText: {
      fontFamily: ""  
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
        marginTop: -2,
        backgroundColor: "#F89880"
    },
    image: {
        marginBottom: 40,
        width: 200,
        height: 250,
        // borderRadius: 600,
      },

});