import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";

const styles = (props: any) => StyleSheet.create({
  dropdown: {
    backgroundColor: props.colorScheme == "dark" ? "#2F2F2F" : "#FDFBF7",
    fontColor: props.colorScheme == "dark" ? "white" : "#2F2F2F",
    borderRadius: 10,
    padding: 10,
    width: 150,
    marginRight: 10,
  },
  placeholderStyle: {
    fontSize: 16,
    color: props.colorScheme == "dark" ? "white" : "#2F2F2F",
  },
  selectedStyle:{
    backgroundColor: props.colorScheme == "dark" ? "#2F2F2F" : "#FDFBF7",
    borderRadius: 12,
    fontColor: props.colorScheme == "dark" ? "#FDFBF7" : "#2F2F2F",
  }
});
export default function DropdownMenu(props: any) {
  const [selected, setSelected] = useState([]);

  function onChange(values: any) {
    props.onChange(values);
    setSelected(values);
  }
  return (
    <MultiSelect
      data={props.data}
      style={styles(props).dropdown}
      placeholderStyle={styles(props).placeholderStyle}
      selectedStyle={styles(props).selectedStyle}
      search={true}
      labelField="label"
      valueField="value"
      value={selected}
      placeholder={props.searchItem}
      onChange={onChange}
    />
  );
}
