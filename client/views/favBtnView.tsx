import React from "react";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Loading from "../components/loading";

export default function FavBtnView(props: any) {
  return props.loading ? (
    <Loading />
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
