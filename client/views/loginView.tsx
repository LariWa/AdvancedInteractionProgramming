import React from 'react'
import { StyleSheet, Image } from "react-native";
import { Stack, TextInput, IconButton, Flex, Text, Button } from "@react-native-material/core";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "var(--dark-blue)",
        padding: 10,
        top: 0,
        width: "100%",
        height: "100%",
        position:"absolute",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop:"70px",
        alignContent:"center"
    },
    mainContainer_textInput:{
        width: "260px",
        marginRight:"auto", 
        marginLeft:"auto", 
        marginBottom: "10px",
        borderRadius: 20,
    },
    mainContainer_h5: {
        marginRight:"auto", 
        marginLeft:"auto", 
        fontWeight:"700",
        marginBottom: "20px",
        color:"var(--light-blue)"
    },
    mainContainer_italics: {
        fontStyle: "italic",
        fontWeight: "400",
        fontSize: 16,
        color:"var(--light-blue)",
        marginLeft: 10,
        textDecorationLine: "underline",
        marginBottom: 30,
        overflow: 'hidden'
    },
    mainContainer_button: {
        backgroundColor: 'var(--light-blue)', 
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
        left: 0,
        width: "40%",
        height: "40%"
    }
})
export default function LoginView() {
    const handleLoginACB = () => {
        //props.getStarted()
    }
    return (
    <Flex fill style={styles.mainContainer}>
        <Text variant="h4" style={styles.mainContainer_h5} >Sign in</Text>
         <TextInput
            label="Name"
            style={styles.mainContainer_textInput}
        />
        <TextInput
            label="Password"
            variant="outlined"
            style={styles.mainContainer_textInput}
        />
        <Text style={styles.mainContainer_italics} >New user</Text>
        <Button title="Get Started" style={styles.mainContainer_button}/>
        
        <Image style={styles.maincontainer_image} source={require('../styles/loginImage.png')} ></Image>
    </Flex>
  )
}
