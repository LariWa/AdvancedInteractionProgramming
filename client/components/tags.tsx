import React from 'react'
import { StyleSheet  } from "react-native";

const styles = StyleSheet.create({
    tag:{
        width: 56,
        height: 18,
        backgroundColor: "#F4FFDC",
        borderRadius: 10
    }
  });

export default function Tags(props:string) {
  return (
    <div style={styles.tag}></div>
  )
}
