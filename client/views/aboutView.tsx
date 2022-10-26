import React from 'react'
import {View, Text, StyleSheet, Linking} from "react-native";

export default function AboutView() {
  return (
    <View style={styles.containerWithInfo}>
        <View style={styles.containerWithInfo_box}>
            <Text style={styles.question}>
                What is the app about?
            </Text>
            <Text style={styles.details}>
                This app is a library of recipes from all over the world.
                Here you can find recipes from different regions, from various categories, and with specific ingredients.
            </Text>
        </View>
        <View style={styles.containerWithInfo_box}>
            <Text style={styles.question}>
                What can you do?
            </Text>
            <Text style={styles.details}>
                In addition to search function user also can add recipe to favorites list, 
                saved ingredients in the grocery list and check what other users like.
            </Text>
        </View>
        <View style={styles.containerWithInfo_box}>
            <Text style={styles.question}>
                What is the source of data?
            </Text>
            <Text style={styles.details}>
                The data was obtained from the 
                <Text
                    style={styles.hyperlinkStyle}
                    onPress={() => {
                    Linking.openURL('https://www.themealdb.com/api.php');
                    }}>
                    TheMealDB API
                </Text>
            </Text>
        </View>
        <View style={styles.containerWithInfo_box}>
            <Text style={styles.question}>
                Link to project?
            </Text>
            <Text style={styles.details}>
                You can also check 
                <Text
                    style={styles.hyperlinkStyle}
                    onPress={() => {
                    Linking.openURL('https://github.com/LariWa/AdvancedInteractionProgramming');
                    }}>
                    GitHub repository
                </Text>
            </Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    question: {
        fontWeight: "bold",
        color: "#242526",
        fontSize: 16,
        textAlign: "center",
    },
    details:{
        fontSize: 14,
        textAlign: "center",
        color: "#242526",
    },
    hyperlinkStyle:{
        fontSize: 14,
        textAlign: "center",
        color: "blue",
        fontWeight: "bold",
    },
    containerWithInfo:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 36,
        paddingRight: 36,
        paddingTop: 50,
        paddingBottom: 0,
    },
    containerWithInfo_box:{
        backgroundColor: "#A7C6DA",
        borderRadius:10,
        padding: 10,
        marginBottom: 10,
        width: "100%"
    }
})
