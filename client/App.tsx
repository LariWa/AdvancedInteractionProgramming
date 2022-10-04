import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { Alert, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { getAPI } from "./webAPI";
import { useSelector, useDispatch } from "react-redux";
import WelcomePresenter from "./presenters/welcomePresenter";

//import { ApplicationState,  getMeal} from './redux';

import { getMealAction } from "./redux/actions/getMealActions";
import { getRandomMealAction } from "./redux/actions/getRandomMealActions";
import { getCategoriesAction } from "./redux/actions/getCategoriesActions";
import LoginPresenter from "./presenters/loginPresenter";
import RegistrationPresenter from "./presenters/registrationPresenter";
import SearchPresenter from "./presenters/searchPresenter";

export default function App() {
  const [fetchedData, setFetchedData] = React.useState("");
  React.useEffect(() => {
    getAPI().then((res) => console.log(res));
  }, []);

  const dispatch = useDispatch();
  const onGetRandomMealACB = () => {
    dispatch(getRandomMealAction() as any);
  };
  const onGetmMealACB = () => {
    dispatch(getMealAction(52772) as any);
  };
  const onGetCategoriesACB = () => {
    dispatch(getCategoriesAction() as any);
  };
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!!</Text>
    //   <button onClick={onGetRandomMealACB}>Get Random Meal</button>
    //   <button onClick={onGetmMealACB}>Get Meal</button>
    //   <button onClick={onGetCategoriesACB}>Get Categories</button>
    //   <div>{`${fetchedData}`}</div>
    //   <StatusBar style="auto" />
    // </View>
    <>
      {/* <WelcomePresenter/> */}
      <LoginPresenter />
      {/* <RegistrationPresenter/> */}
      {/* <SearchPresenter /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
