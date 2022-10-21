import React, { useState } from "react";
import { StyleSheet, Image, TextInput, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Flex, Button, Box, Spacer, HStack } from "@react-native-material/core";
import DishCard from "../components/dishCard";
import { FontAwesome } from "@expo/vector-icons";
import { Stack, Avatar } from "@react-native-material/core";

const styles = (props: any) => StyleSheet.create({
    header:{
        width: "100%",
        height: 50,
        backgroundColor: props.colorScheme == "dark" ? "#121212" : "#FDFBF7",
        padding: 10,
    },
    header__text:{
        color: props.colorScheme == "dark" ? "#FDFBF7" : "#121212",
    },
    header__login:{
        color: props.colorScheme == "dark" ? "#FDFBF7" : "#121212",
    },
    logout:{
        left: 0,
        top: 0,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        position:"absolute"
    }
});


export default function UserView(props: any){
    const [visibleDropDown, setVisibleDropDown] = useState(false)
    function showDropDownACB(){
        console.log(11111111111)
        //setVisibleDropDown(true)
    }
    return(
        <HStack spacing={6} style={styles(props).header}>
            <Text style={styles(props).header__text} onPress={showDropDownACB}>
                Name
            </Text>
            <Spacer />
            <Avatar 
                label="Kent Dodds" 
                autoColor 
                onPress={props.logout}
                size={32}/>
            {visibleDropDown && <View style={styles.logout}>
                <Text>Log out</Text>
            </View>}
        </HStack>
    );
}