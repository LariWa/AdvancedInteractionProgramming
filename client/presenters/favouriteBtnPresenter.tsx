import { useSelector, useDispatch } from "react-redux";
import { addFav, deleteFav } from "../redux/actions/favouritesActions";
import { setSnackbar } from "../redux";
import React from "react";
import FavBtnView from "../views/favBtnView";

export default function FavouriteBtnPresenter(props: any) {
  const dispatch = useDispatch<any>();
  const addedToFav = useSelector((state: any) =>
    state.favourites.data.includes(props.id)
  );
  const loading = useSelector((state: any) => state.favourites.loading);
  const user = useSelector((state: any) => state.user);
  function favBtnClickedACB() {
    if (!user)
      dispatch(setSnackbar("Please log in to add your favourite recipes!"));
    else {
      if (!addedToFav) dispatch(addFav(props.id));
      else dispatch(deleteFav(props.id));
    }
  }
  return (
    <FavBtnView
      loading={loading}
      onClicked={favBtnClickedACB}
      addedToFav={addedToFav}
    />
  );
}
