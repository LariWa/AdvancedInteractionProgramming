import { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import selectedValueFilter1 from "../views/SearchView"
import selectedValueFilter2 from "../views/SearchView"
import selectedValueFilter3 from "../views/SearchView"

import EditViewInfo from '../components/EditViewInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function AfterSearchView({ navigation }: RootTabScreenProps<'TabFour'>) {

  const [selectedValueFilter1, setSelectedValueFilter1] = useState("Select one category...");
  const [selectedValueFilter2, setSelectedValueFilter2] = useState("Select on area...");
  const [selectedValueFilter3, setSelectedValueFilter3] = useState("Select an ingredient...");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search View</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TextInput
        style={styles.input}
        placeholder="Search"
        keyboardType="default"
      />

      <Picker //for category
        selectedValue={selectedValueFilter1}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue1, itemIndex1) => setSelectedValueFilter1(itemValue1)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js"/>
      </Picker>

      <Picker //for area
        selectedValue={selectedValueFilter2}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue2, itemIndex2) => setSelectedValueFilter2(itemValue2)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js"/>
      </Picker>

      <Picker //for ingredients
        selectedValue={selectedValueFilter3}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue3, itemIndex3) => setSelectedValueFilter3(itemValue3)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js"/>
      </Picker>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    fontWeight: "bold",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20,
    marginVertical: 4
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 20
  }
});
