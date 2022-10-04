import React from 'react'
import { StyleSheet, Image, TextInput, View  } from "react-native";
import {  Avatar } from "@react-native-material/core";

const styles = StyleSheet.create({
    header:{
        width: "100%",
        marginBottom: 10,
        display:"flex",
        justifyContent:"flex-end"
    },
    avatar:{
        top: 0,
        fontSize: 12,
    },
})

export default function Header() {
  return (
    <div style={styles.header}> 
        <Avatar 
        size={32}
        label="Kent Dodds" 
        autoColor 
        style={styles.avatar}/>
    </div>
  )
}
