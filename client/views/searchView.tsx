import React from "react";
import { StyleSheet, TextInput, View, ScrollView } from "react-native";
import { Flex, Button, HStack } from "@react-native-material/core";
import DropdownMenu from "../components/dropdownMenu";
import Header from "../components/header";

const styles = (props: any) => StyleSheet.create({
  mainContainer: {
    top: 0,
    width: "100%",
    height: "auto",
    backgroundColor: props.colorScheme == "dark" ? "#18191A" : "#FDFBF7",
    // position: "absolute",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    marginBottom: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  mainContainer_button: {
    // backgroundColor: "var(--dark-blue)",
    width: 155,
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: 10,
    borderRadius: 300,
  },
  mainContainer_filters: {
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
    display: "flex",
    overflowX: "auto",
  },
  mainContainer__search: {
    marginBottom: 10,
    backgroundColor: props.colorScheme == "dark" ? "#2F2F2F" : "#FDFBF7",
    color: props.colorScheme == "dark" ? "white" : "#2F2F2F",
    borderRadius: 10,
    width: "70%",
    height: 45,
    paddingLeft: 10,
    fontStyle: "italic",
  },
  mainContainer__button: {
    backgroundColor: "black",
    borderRadius: 300,
    height: 45,
  },
});
export default function SearchView(props: any) {
  function onSearch() {
    props.onSearch();
  }
  return (
    <View style={styles(props).mainContainer}>
      {/* <Header /> */}
      {/* <Text style={styles.mainContainer_h5} >Sign up</Text> */}
      <HStack spacing={6}>
        <TextInput
          placeholder="Search"
          style={styles(props).mainContainer__search}
          onChangeText={props.onQueryChanged}
        />
        <Button title="Search" style={styles(props).mainContainer__button} onPress={onSearch} />
      </HStack>
      <ScrollView horizontal={true}>
        <Flex direction="row" style={styles(props).mainContainer_filters}>
          <DropdownMenu
            data={props.categories}
            onChange={props.onCategoriesSelected}
            colorScheme={props.colorScheme}
            searchItem="Categories"
          />
          <DropdownMenu
            data={props.areas}
            onChange={props.onAreasSelected}
            colorScheme={props.colorScheme}
            searchItem="Areas"
          />
          <DropdownMenu
            data={props.ingrToSelect}
            onChange={props.onIngredientsSelected}
            colorScheme={props.colorScheme}
            searchItem="Ingredients"
          />
        </Flex>
      </ScrollView>
    </View>
  );
}
