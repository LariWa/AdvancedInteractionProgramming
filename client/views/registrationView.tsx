import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';

import EditViewInfo from '../components/EditViewInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function RegistrationView({ navigation }: RootTabScreenProps<'TabTwo'>) {

  const [name, onSetName] = useState("");
  const [password, onSetPassword] = useState("");
  const [passwordTwice, onSetPasswordTwice] = useState("");

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration View</Text>
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
      <TextInput
        style={styles.input}
        onChangeText={onSetPassword}
        value={password}
        placeholder="PasswordTwice"
        keyboardType="default"
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabFour')} >
        <Text>Sign up</Text>
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
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 20,
    //backgroundColor: "black"
  },
  button: {
    fontWeight: "bold",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginVertical: 4,
  },
});
