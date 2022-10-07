import { StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';

import EditViewInfo from '../components/EditViewInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function SearchView({ navigation }: RootTabScreenProps<'TabFour'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Four</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TextInput
        style={styles.input}
        placeholder="Name"
        keyboardType="default"
      />
      <Text style={styles.title}>
        Search View
      </Text>
      

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
