import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import {
  Stack,
  IconButton,
  Flex,
  Text,
  Button,
  HStack,
  Wrap,
  IconComponentProvider,
  Icon
} from "@react-native-material/core";
import { AntDesign } from '@expo/vector-icons';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  dishcard: {
    marginTop: 30,
    position: "relative",
    alignContent: "center",
  },
  dishcard_img: {
    width: "30%",
    height: 200,
    backgroundColor: "#faf089",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  dishcard_details: {
    width: "82%",
    height: 200,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  dishcard_details_header: {
  },
  dishcard_details_description: {
    fontSize: 9,
  },
  tag:{
    width: "auto",
    height: 25,
    backgroundColor: "#F3F2E9",
    borderRadius: 10,
    marginRight: 10,
    marginTop: 5,
    padding: 5

  },
  dishcard_right:{
    width: "70%",
    backgroundColor:"white"
  }
});
export default function DishCard(props: any) {
  const onRegistrationACB = () => {
    props.onRegistration();
  };
  const onLoginACB = () => {
    props.onLogin();
  };

  function renderArrayCB(tag: any){
      return<Text style={styles.tag} key={tag}>
          {tag}
      </Text>
  }
  function handleFavoritesACB(){
    console.log(111111111111)
    props.handleFavorites(props.data.idMeal)
  }
  function onSelectedRecipeACB(){
    props.onSelectedRecipe(props.data)
  }
  return (
    <TouchableOpacity onPress={onSelectedRecipeACB}>
      <HStack spacing={0} style={styles.dishcard}>
      <Image
        style={styles.dishcard_img}
        source={props.data.strMealThumb}
      ></Image>
      <Wrap m={4} items="center" spacing={5} style={styles.dishcard_right}>
        <View style={styles.dishcard_details}>
          <Text style={styles.dishcard_details_header}>{props.data.strMeal}</Text>
          <Text style={styles.dishcard_details_description}>
          </Text>
          <Flex wrap="wrap" direction="row">
            <View><Text>{props.data.strTags && props.data.strTags.split(',').map(renderArrayCB)}</Text></View>
          </Flex>
        </View>
        <AntDesign name="hearto" size={24} color="black" onPress={handleFavoritesACB}/>
      </Wrap>
      </HStack> 
    </TouchableOpacity>   
  );
}
