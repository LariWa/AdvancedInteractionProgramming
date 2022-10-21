import React from "react";
import useColorScheme from "../hooks/useColorScheme";
import HeaderView from "../views/headerView"
import UserView from "../views/userView"
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../components/Themed";
import { getMealsDetails } from "../mealSouce";
import { setSnackbar } from "../redux";
import ResultsView from "../views/resultsView";

export default function HeaderPresenter(props: any, {navigation}: any) {
    const user = useSelector((state: any) => state.user);
    function loginACB(){
        props.navigation.navigate("Login");
    }
    function logoutACB(){
        console.log(1111111111)
        //props.navigation.navigate("Login");
    }
    return (
        <HeaderView 
        colorScheme={props.colorScheme} 
        login={loginACB}
        logout={logoutACB}
        user={user}/>
    )
}
