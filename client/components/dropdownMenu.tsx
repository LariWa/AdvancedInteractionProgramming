import React from "react";
import { StyleSheet, Image, TextInput, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: "#F3F2E9",
    borderRadius: 10,
    padding: 10,
    width: 150,
    marginRight: 10,
  },
});
export default function DropdownMenu(props: any) {
  return (
    <Dropdown
      data={props.data}
      style={styles.dropdown}
      search={true}
      labelField="label"
      valueField="value"
      onChange={onChange}
    />
  );
  function onChange(value) {
    props.onChange(value.label);
  }
}
