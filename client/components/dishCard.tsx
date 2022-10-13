import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  View,
  ActivityIndicator,
} from "react-native";
import {
  Stack,
  IconButton,
  Flex,
  Text,
  Button,
  HStack,
  Wrap,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { addFav, deleteFav } from "../redux/actions/favouritesActions";
import { setUser } from "../redux";
const styles = StyleSheet.create({
  dishcard: {
    marginTop: 30,
    position: "relative",
    alignContent: "center",
  },
  dishcard_img: {
    width: "30%",
    height: "200px",
    backgroundColor: "#faf089",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  dishcard_details: {
    width: "82%",
    height: "200px",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  dishcard_details_header: {
    fontWeight: "700",
  },
  dishcard_details_description: {
    fontSize: 9,
  },
  tag: {
    width: "auto",
    height: 25,
    backgroundColor: "#F3F2E9",
    borderRadius: 10,
    marginRight: 10,
    marginTop: 5,
    padding: 5,
  },
  dishcard_right: {
    width: "70%",
    backgroundColor: "white",
  },
});
export default function DishCard(props: any) {
  // const addedToFav = useSelector((state: any) =>
  //   state.favourites.includes(props.idMeal)
  // );
  const dispatch = useDispatch<any>();

  function renderArrayCB(tag: any) {
    return (
      <div style={styles.tag} key={tag}>
        {tag}
      </div>
    );
  }

  return (
    <HStack spacing={0} style={styles.dishcard}>
      <Image
        style={styles.dishcard_img}
        source={props.data.strMealThumb}
      ></Image>
      <Wrap m={4} items="center" spacing={5} style={styles.dishcard_right}>
        <View style={styles.dishcard_details}>
          <Text style={styles.dishcard_details_header}>
            {/* TODO fix error text node cannot be a child of a <View>.  */}
            {props.data.strMeal}
          </Text>
          <Text style={styles.dishcard_details_description}></Text>
          <Flex wrap="wrap" direction="row">
            {props.data.strTags &&
              props.data.strTags.split(",").map(renderArrayCB)}
          </Flex>
        </View>
        {props.loading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <IconButton
            onPress={props.onFavBtnClicked}
            icon={() => (
              <Icon
                name={"heart"}
                size={24}
                color={props.addedToFav ? "red" : "grey"}
              />
            )}
          />
        )}
      </Wrap>
    </HStack>
  );
}
