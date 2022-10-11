import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchView from "../views/searchView";
import {
  filterMeals,
  getAreas,
  getCategories,
  getIngredients,
} from "../mealSouce";
import resolvePromise from "../resolvePromise";
import { promiseStateType } from "../types";
import { RootTabScreenProps } from "../types";
import promiseNoData from "../views/promiseNoData";
import ResultsView from "../views/resultsView";
import { StyleSheet, View } from "react-native";
import { Flex } from "@react-native-material/core";
import PromiseNoData from "../views/promiseNoData";
import { Text } from "../components/Themed";

export default function ReceipePresenter({navigation}: RootTabScreenProps<"TabFive">) {
    return(
        <Flex>
            <Text>This will be the details</Text>
        </Flex>
    );
}