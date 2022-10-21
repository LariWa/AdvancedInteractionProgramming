import { Flex, Text, ListItem, Box, Avatar } from "@react-native-material/core";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Image, TextInput, View, Button } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";

const styles = (props: any) => StyleSheet.create({
    mainComponents:{
        width: "100%",
        height: "100%",
        backgroundColor: props.colorScheme == "dark" ? "#18191A" : "#FDFBF7",
        fontColor: props.colorScheme == "dark" ? "white" : "#314959",
        alignItems: "center",
        paddingTop: 200,
        gap: 20,
    },
    email:{
        width: 264,
        height: 45,
        borderColor: props.colorScheme == "dark" ? "#FDFBF7" : "#314959",
        borderWidth: 2,
        fontColor: props.colorScheme == "dark" ? "white" : "black",
        color: props.colorScheme == "dark" ? "white" : "black",
        backgroundColor: "#FDFBF7",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        margin: 20,
    },
    profile_button:{
        backgroundColor: props.colorScheme == "dark" ? "#FDFBF7" : "#314959",
        color: props.colorScheme == "dark" ? "#314959" : "#FDFBF7",
    },
    profile_text:{
        margin: 20,
        color: "grey",
    }
});

export default function ProfileView(props: any) {
    return (
        <Flex fill style={styles(props).mainComponents}>
            <Avatar label={props.name} size={100} />
                <Text style={styles(props).profile_text}>
                Email: {props.name}
                </Text>
            <Button
                title="Logout"
                // color= {props.colorScheme == "dark" ? "#FDFBF7" : "#FDFBF7"}
                onPress={props.handleLogout}
                style={styles(props).profile_button}
            />
        </Flex>
  );
}
