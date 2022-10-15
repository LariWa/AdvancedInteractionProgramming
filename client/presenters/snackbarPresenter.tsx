import React from "react";
import { Snackbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "../redux";
export default function SnackbarPresenter() {
  const dispatch = useDispatch<any>();
  const onDismissSnackBar = () => dispatch(hideSnackbar());
  const visibility = useSelector((state: any) => state.snackbar.visibility);
  const msg = useSelector((state: any) => state.snackbar.msg);

  return (
    <Snackbar
      visible={visibility}
      onDismiss={onDismissSnackBar}
      duration={2000}
      action={{
        label: "Dismiss",
      }}
    >
      {msg}
    </Snackbar>
  );
}
