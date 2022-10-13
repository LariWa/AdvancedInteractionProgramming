import React, {useState} from "react";
import { StyleSheet, Image, TextInput, View } from "react-native";
import { MultiSelect  } from "react-native-element-dropdown";
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
  const [selected, setSelected] = useState([])

  function onChange(value: any) {
    props.onChange(value.toString());
    console.log(JSON.stringify(value))
    setSelected(value);
  }
  return (
    <MultiSelect
      data={props.data}
      style={styles.dropdown}
      search={true}
      labelField="label"
      valueField="value"
      value={selected}
      placeholder={props.searchItem}
      onChange={onChange}
    />
  );
}
