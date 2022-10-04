import React from 'react'
import { StyleSheet, Image, TextInput } from "react-native";
import { Stack, IconButton, Flex, Text, Button } from "@react-native-material/core";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#F4FFDC",
        padding: 10,
        top: 0,
        width: "100%",
        height: "100%",
        position:"absolute",
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 70,
        alignContent:"center"
    },
    mainContainer_textInput:{
        marginRight:"auto", 
        marginLeft:"auto", 
        marginBottom: "10px",
        border: "1px solid #314959",
        borderRadius: 10,
        width: 264,
        height: 45,
        paddingLeft: 10
    },
    mainContainer_h5: {
        marginRight:"auto", 
        marginLeft:"auto", 
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 20,
        color:"#314959"
    },
    mainContainer_italics: {
        fontStyle: "italic",
        fontWeight: "400",
        fontSize: 16,
        marginRight:"auto", 
        marginLeft:"auto", 
        color:"#314959",
        textDecorationLine: "underline",
        marginBottom: 30,
        overflow: 'hidden'
    },
    mainContainer_button: {
        backgroundColor: '#314959', 
        width:155, 
        height:60, 
        marginRight:"auto", 
        marginLeft:"auto", 
        paddingTop: 10, 
        paddingBottom:10, 
        borderRadius: 300,
        boxShadow: "0px 0px 100px rgba(162, 170, 106, 0.2)"
    },
    maincontainer_image:{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 170,
        height: 270
    }
})
export default function RegistrationView(props: any) {
    const onRegistrationACB = () => {
        props.onRegistration()
    }
    const onLoginACB = () => {
        props.onLogin()
    }
    return (
    <Flex fill style={styles.mainContainer}>
        <Text style={styles.mainContainer_h5} >Sign up</Text>
         <TextInput
            placeholder="Name"
            style={styles.mainContainer_textInput}
        />
        <TextInput
            placeholder="Password"
            style={styles.mainContainer_textInput}
        />
        <TextInput
            placeholder="Confirm Password"
            style={styles.mainContainer_textInput}
        />
        <Text style={styles.mainContainer_italics} onPress={onLoginACB}>Alredy have an account?</Text>
        <Button title="Get Started" style={styles.mainContainer_button} onPress={onRegistrationACB}/>
        <Image style={styles.maincontainer_image} source={require('../styles/registrationImage.png')}></Image>
    </Flex>
  )
}
