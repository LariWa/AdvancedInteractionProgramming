import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  View,
  ActivityIndicator,
  TouchableOpacity,
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
import FavouriteBtnPresenter from "../presenters/favouriteBtnPresenter";

const styles = (props: any) => StyleSheet.create({
  dishcard: {
    marginTop: 30,
    height: "auto",
    position: "relative",
    alignContent: "center", 
    shadowColor: '#363842',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  dishcard__left: {
    width: "50%",
    height: "100%",
    backgroundColor: "#faf089",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  dishcard__right: {
    width: "50%",
    minHeight: 200,
    backgroundColor: props.colorScheme == "dark" ? "#2F2F2F" : "#FDFBF7",
    border: "1px solid #606770",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  dishcard__right__details: {
    margin: 0,
    width: "70%",
    height: "100%",
    padding: 10,
  },
  dishcard__right__details__header: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "#8D909B",
  },
  dishcard__right__details__tags: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  dishcard__right__details__tags__tag: {
    width: "auto",
    backgroundColor: "#8D909B",
    borderRadius: 15,
    marginRight: 20,
    marginBottom: 5,
    marginTop: 5,
    padding: 5,
    fontSize: 9,
  },
});
export default function DishCard(props: any) {
  // const addedToFav = useSelector((state: any) =>
  //   state.favourites.includes(props.idMeal)
  // );
  const dispatch = useDispatch<any>();

  function renderArrayCB(tag: any) {
    return (
      <Text style={styles(props).dishcard__right__details__tags__tag} key={tag}>
        {tag}
      </Text>
    );
  }

  return (
    <TouchableOpacity onPress={props.onSelectedRecipe}>
      <HStack spacing={0} style={styles(props).dishcard}>
        <Image
          style={styles(props).dishcard__left}
          source={{uri: props.data.strMealThumb}}
        ></Image>
        <HStack style={styles(props).dishcard__right}>
          <View style={styles(props).dishcard__right__details}>
            <Text style={styles(props).dishcard__right__details__header}>
              {props.data.strMeal}
            </Text>
            <Text style={styles(props).dishcard__right__details__tags}>
            
                  {props.data.strTags &&
                    props.data.strTags.split(",").map(renderArrayCB)}
              
            </Text>
          </View>
          <FavouriteBtnPresenter colorScheme={props.colorScheme} id={props.data.idMeal} />
        </HStack>
      </HStack>
    </TouchableOpacity>
  );
}
