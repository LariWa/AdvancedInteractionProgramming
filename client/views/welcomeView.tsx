import React from 'react'
import { Image, ImageBackground, StyleSheet } from "react-native";
import { Flex, Box, Text, VStack, Button } from "@react-native-material/core";

const previewImage = require("../styles/previewImage.png");

const styles = StyleSheet.create({
    containerOne: {
        backgroundColor: "#white"
    },
    containerTwo: { 
        backgroundColor: "#F4FFDC", 
        borderTopLeftRadius: 60,
        borderTopRightRadius: 30,
    },
    containerTwo_centered: { 
        justifyContent:"center", 
        alignContent:"center"
    },
    containerTwo_centered_h5: {
        marginRight:"auto", 
        marginLeft:"auto", 
        fontWeight:"700"
    },
    containerTwo_centered_h6: {
        marginRight:"auto", 
        marginLeft:"auto", 
        fontWeight:"400"
    },
    button: {
        backgroundColor: 'white', 
        width:"200px", 
        height:"60px", 
        marginRight:"auto", 
        marginLeft:"auto", 
        paddingTop: "10px", 
        paddingBottom:"10px", 
        borderRadius: 30,
    },
    containerOne_image: {
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        position: "absolute"
    }
   
   });

export default function WelcomeView(props: any) {
    const handleStartACB = () => {
        props.getStarted()
    }
    return (
    <Flex fill>
        <Flex fill style={styles.containerOne}>
            <Image style={styles.containerOne_image} source={require('../styles/previewImage.png')} ></Image>
        </Flex>
        <Flex fill style={styles.containerTwo}>
            <Flex fill style={styles.containerTwo_centered}>
                <Text variant="h5" style={styles.containerTwo_centered_h5} >Welcome</Text>
                <Text variant="h6" style={styles.containerTwo_centered_h6} >Welcome text Welcome text</Text>
            </Flex>
            <Flex fill style={styles.containerTwo_centered}>
            <Button title="Get Started" style={styles.button} color="red" onPress={handleStartACB}/>
            </Flex>
        </Flex>
    </Flex>
  )
}
