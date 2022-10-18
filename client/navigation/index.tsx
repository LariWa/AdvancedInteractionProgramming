/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { Flex } from "@react-native-material/core";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Text, View } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalPresenter from "../presenters/modalPresenter";
import NotFoundScreen from "../views/notFoundView";
import WelcomePresenter from "../presenters/welcomePresenter";
import LoginPresenter from "../presenters/loginPresenter";
import RegistrationPresenter from "../presenters/registrationPresenter";
import SearchPresenter from "../presenters/searchPresenter";
import RecipePresenter from "../presenters/recipePresenter";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { login } from "../loginSource";
import FavouritesPresenter from "../presenters/favourtiesPresenter";
import GroceryListPresenter from "../presenters/groceryListPresenter";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "../redux";
import { Octicons } from '@expo/vector-icons';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const user = useSelector((state: any) => state.user);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="Favourites"
        component={user != "" ? FavouritesPresenter : LoginPresenter}
      />
      <Stack.Screen name="Login" component={LoginPresenter} />
      <Stack.Screen name="Registration" component={RegistrationPresenter} />
      <Stack.Screen name="Recipe" component={RecipePresenter} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalPresenter} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch<any>();

  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={WelcomePresenter}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Welcome",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} tabName="Welcome" />,
          headerRight: () => (
            <Flex direction="row">
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Login")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome
                  name="sign-in"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            </Flex>
          ),
        })}
      />
      <BottomTab.Screen
        name="Favourties"
        component={user ? FavouritesPresenter : LoginPresenter}
        listeners={{
          tabPress: (e) => {
            if (!user)
              dispatch(setSnackbar("Please login to see your favourites"));
          },
        }}
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} tabName="Favorites"/>,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={user ? SearchPresenter : LoginPresenter} //Search
        listeners={{
          tabPress: (e) => {
            if (!user)
              dispatch(setSnackbar("Please login to see your grocery list"));
          },
        }}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} tabName="Search" />,
        }}
      />
      <BottomTab.Screen
        name="Grocery"
        component={user ? GroceryListPresenter : LoginPresenter} //Grocery
        listeners={{
          tabPress: (e) => {
            if (!user)
              dispatch(setSnackbar("Please login to see your grocery list"));
          },
        }}
        options={{
          title: "Grocery list",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} tabName="Grocery list"/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  tabName: string,
}) {

  if (props.tabName == "Welcome"){
    return <FontAwesome name = "home" size={30} color="black" />;
  }else if (props.tabName == "Search"){
    return <Octicons name = "search" size={30} color="black" />;
  }else if (props.tabName == "Favorites"){
    return <FontAwesome name= "heart" size={30} color="black" />;
  }else if (props.tabName == "Grocery list"){
    return <MaterialIcons name="local-grocery-store" size={30} color="black" />;
  }
}
