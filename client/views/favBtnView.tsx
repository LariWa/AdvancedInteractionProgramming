import React from "react";
import { ActivityIndicator } from "react-native";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function FavBtnView(props: any) {
  return props.loading ? (
    <ActivityIndicator size="large" color="#00ff00" />
  ) : (
    <IconButton
      onPress={props.onClicked}
      icon={() => (
        <Icon
          name={"heart"}
          size={24}
          color={props.addedToFav ? "red" : "grey"}
        />
      )}
    />
  );
}
