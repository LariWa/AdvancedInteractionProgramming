import { useState } from 'react';
import { Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import EditViewInfo from '../components/EditViewInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function LoginView({ navigation }: RootTabScreenProps<'TabTwo'>) {

  const [name, onSetName] = useState("");
  const [password, onSetPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login view</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TextInput
        style={styles.input}
        onChangeText={onSetName}
        value={name}
        placeholder="Name"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={onSetPassword}
        value={password}
        placeholder="Password"
        keyboardType="default"
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabFour')} >
        <Text>Log in</Text>
      </TouchableOpacity>
      <Text>Not a member?</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabThree')} >
        <Text>Register!</Text>
      </TouchableOpacity>
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
    padding: 10,
    marginVertical: 4,
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 20,
    //backgroundColor: "white"
  },
});