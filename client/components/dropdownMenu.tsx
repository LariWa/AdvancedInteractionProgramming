import React from 'react'
import { StyleSheet, Image, TextInput, View  } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';

const styles = StyleSheet.create({
    dropdown:{
        backgroundColor: "#F3F2E9",
        borderRadius: 10,
        padding: 10,
        width: 150,
        marginRight: 10,
    },
})
export default function DropdownMenu(props:any) {
  return (
    <Dropdown  data={props.data}
        style={styles.dropdown}
        labelField="label"
        valueField="value"
        onChange={() => {
            console.log(11)
        }}
    />
  )
}
