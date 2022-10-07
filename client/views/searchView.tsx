import React, { useState } from "react";
import { StyleSheet, Image, TextInput, View } from "react-native";
import {
  Stack,
  IconButton,
  Flex,
  Text,
  Button,
  HStack,
} from "@react-native-material/core";
import DropdownMenu from "../components/dropdownMenu";
import DishCard from "../components/dishCard";
import Search from "../components/search";
import Header from "../components/header";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
];

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FDFBF7",
    padding: 10,
    top: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "30px",
    alignContent: "center",
  },
  mainContainer_button: {
    backgroundColor: "var(--dark-blue)",
    width: 155,
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: 300,
    boxShadow: "0px 0px 100px rgba(162, 170, 106, 0.2)",
  },
  mainContainer_filters: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 0,
    width: "100%",
    display: "flex",
    overflowX: "auto",
  },
  textInput: {
    marginBottom: "10px",
    backgroundColor: "#F3F2E9",
    borderRadius: 10,
    width: "100%",
    height: 45,
    paddingLeft: 10,
    fontStyle: "italic",
  },
});
export default function SearchView(props: any) {
  const onRegistrationACB = () => {
    props.onRegistration();
  };
  const onLoginACB = () => {
    props.onLogin();
  };
  function onInputACB(event: any) {
    props.onInput(event.target.value);
  }
  return (
    <Flex fill style={styles.mainContainer}>
      <Header />
      {/* <Text style={styles.mainContainer_h5} >Sign up</Text> */}
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        onChange={onInputACB}
      />
      <div style={styles.mainContainer_filters}>
        <DropdownMenu data={data} />
        <DropdownMenu data={data} />
      </div>
      <DishCard />
      <DishCard />
    </Flex>
  );
}
