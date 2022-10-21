import React from "react";
import { ActivityIndicator, View, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../components/Themed";
import { getMealsDetails } from "../mealSouce";
import { setSnackbar } from "../redux";
import { RootTabScreenProps } from "../types";
import ResultsView from "../views/resultsView";
import useColorScheme from "../hooks/useColorScheme";

export default function FavouritesPresenter({
  navigation,
}: RootTabScreenProps<"Favourites">) {
  const dispatch = useDispatch<any>();
  const favourites = useSelector((state: any) => state.favourites.data);
  const [loading, setLoadingState] = React.useState<boolean>();
  const [favouritesDetails, setFavouritesDetails] = React.useState<Array<any>>(
    []
  );
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    setLoadingState(true);
    getMealsDetails(favourites)
      .then((res) => {
        setFavouritesDetails(res.data);
        setLoadingState(false);
      })
      .catch((e) => {
        setLoadingState(false);
        dispatch(
          setSnackbar(
            "Something went wrong fetching your favourites from the server: " +
              e.message
          )
        );
      });
  }, [favourites]);

  return favouritesDetails.length > 0 ? (
    <ResultsView 
    results={favouritesDetails} 
    navigation={navigation}
    colorScheme={colorScheme}
    />
  ) : loading ? (
    <ActivityIndicator size="large" color="#00ff00" />
  ) : (
    <View style={styles.modalView}>
      <Text style={styles.messageText}>Nothing was found</Text>
      <Image 
        style={styles.image}
        source={require("../styles/notfound.png")}> 
      </Image> 
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    width: 200,
    height: 150,
    left: 0,
    top: "20%",
  },
  
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalView: {
    margin: 20,
    marginTop: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5
  },
  messageText:{
    fontWeight: 'bold',
    color: "black"
  }
})
