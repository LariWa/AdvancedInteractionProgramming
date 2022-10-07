import React, { ChangeEvent, useState }  from 'react'
import { StyleSheet, Image, TextInput, View  } from "react-native";


const styles = StyleSheet.create({
    textInput:{
        marginBottom: "10px",
        backgroundColor: "#F3F2E9",
        borderRadius: 10,
        width: "100%",
        height: 45,
        paddingLeft: 10,
        fontStyle: "italic",
    },
})
export default function Search(props: any) {
  function handleInputACB(event: any){
    props.handleInput(event.target.value)
  }
  return (
    <>
        <TextInput
                placeholder="Search"
                style={styles.textInput}
                onChange={handleInputACB}
        />
    </>
    
  )
}
