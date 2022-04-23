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


   



    
  const  LoginScreen = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    
        return (
            <View style = {styles.container}>
                <StatusBar style="auto" />
                <View style = {styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder = "Your username"
                    placeholderTextColor= "#3003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
    
                </View>
                <View style = {styles.inputView}>
                    <TextInput
                    style = {styles.TextInput}
                    placeholder = "Your password"
                    placeholderTextColor = "#3003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
                </View>
    
               
                <TouchableOpacity style = {styles.loginBtn}>
                    <Text style={styles.loginText}>SIGN IN</Text>
                </TouchableOpacity>
    
                <Text>
                    OR
                </Text>
                <TouchableOpacity style = {styles.loginBtn}>
                <Text style={styles.loginText}>Google</Text>
                    {/* <Image style = {{
                        height: 100,
                        width: 200
                    }}
                    source={require('./assets/download.png')}
                    /> */}
                </TouchableOpacity>
    
    
                {/* <TouchableOpacity>
                    <Text style={styles.forgot_botton}>Forgot Password? dw :)</Text>
                </TouchableOpacity> */}
                
            </View>
        );
    };
//};

// class LoginScreen extends Component{
    
// }


export default LoginScreen;

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