import React from 'react'
import { StyleSheet, Image, TextInput } from "react-native";
import { Stack, IconButton, Flex, Text, Button } from "@react-native-material/core";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "var(--light-green)",
        padding: 10,
        top: 0,
        width: "100%",
        height: "100%",
        position:"absolute",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop:"40px",
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
        color:"var(--dark-blue)"
    },
    mainContainer_italics: {
        fontStyle: "italic",
        fontWeight: "400",
        fontSize: 16,
        marginRight:"auto", 
        marginLeft:"auto", 
        color:"var(--dark-blue)",
        textDecorationLine: "underline",
        marginBottom: 30,
        overflow: 'hidden'
    },
    mainContainer_button: {
        backgroundColor: 'var(--dark-blue)', 
        width:155, 
        height:60, 
        marginRight:"auto", 
        marginLeft:"auto", 
        paddingTop: "10px", 
        paddingBottom:"10px", 
        borderRadius: 300,
        boxShadow: "0px 0px 100px rgba(162, 170, 106, 0.2)"
    },
    maincontainer_image:{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "170px",
        height: "270px"
    }
})
export default function RegistrationView(props: any) {
    const onRegistrationACB = () => {
        props.onRegistration()
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
        <Text style={styles.mainContainer_italics} >New user</Text>
        <Button title="Get Started" style={styles.mainContainer_button} onPress={onRegistrationACB}/>
        <Image style={styles.maincontainer_image} source={require('../styles/registrationImage.png')}></Image>
    </Flex>
  )
}
