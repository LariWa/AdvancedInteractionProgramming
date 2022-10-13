import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  Flex,
  Button,
  HStack,
} from "@react-native-material/core";
import DropdownMenu from "../components/dropdownMenu";
import Header from "../components/header";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FDFBF7",
    top: 0,
    width: "100%",
    // height: "100%",
    // position: "absolute",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "10px",
    alignContent: "center",
  },
  mainContainer_button: {
    backgroundColor: "var(--dark-blue)",
    width: 155,
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: "10px",
    borderRadius: 300,
    boxShadow: "0px 0px 100px rgba(162, 170, 106, 0.2)",
  },
  mainContainer_filters: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
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
  searchButton:{
    backgroundColor: "#314959",
    boxShadow: "0px 0px 100px rgba(162, 170, 106, 0.2)",
    borderRadius: 30
  }
});
export default function SearchView(props: any) {
  function onSearch(){
    props.onSearch();
  }
  return (
    <Flex fill style={styles.mainContainer}>
      <Header />
      {/* <Text style={styles.mainContainer_h5} >Sign up</Text> */}
      <HStack spacing={6}>
        <TextInput
          placeholder="Search"
          style={styles.textInput}
          onChangeText={props.onQueryChanged}
        />
        <Button title="Search"  style={styles.searchButton} onPress={onSearch} />
      </HStack>
      <Flex direction="row" style={styles.mainContainer_filters}>
        <DropdownMenu
          data={props.categories}
          onChange={props.onCategorySelected}
          searchItem="Category"
        />
        <DropdownMenu 
          data={props.areas} 
          onChange={props.onAreaSelected} 
          searchItem="Area"
        />
        <DropdownMenu
          data={props.ingrToSelect}
          onChange={props.onIngredientsSelected}
          searchItem="Ingredients"
        />
      </Flex>
    </Flex>
  );
}
