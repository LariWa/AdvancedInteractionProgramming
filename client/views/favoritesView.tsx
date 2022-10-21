import React from "react";
import { View, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import {
  Stack,
  IconButton,
  Flex,
  Text,
  Button,
} from "@react-native-material/core";
import DishCard from "../components/dishCard";
import { styles_loginPage } from "./styles";

export default function FavoritesView(props: any) {
  return (
    <ScrollView>
        <Flex fill>
            {props.results && props.results.map((r: any) => (
            <DishCard 
              key={r.idMeal} 
              data={r} 
              onSelectedRecipe={props.onSelectedRecipe} 
              handleFavorites={props.handleFavorites}
              colorScheme={props.colorScheme}
            />
            ))}
        </Flex>
    </ScrollView>
  );
}