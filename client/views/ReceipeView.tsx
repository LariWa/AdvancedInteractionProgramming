import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import {} from './SearchView'
import EditViewInfo from '../components/EditViewInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ReceipeView({ navigation }: RootTabScreenProps<'TabSix'>) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Here should be shown a receipe</Text>
      <Text style={styles.title}>Here should be shown a receipe</Text>
      <Text style={styles.title}>Here should be shown a receipe</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabTwo')} >
        <Text>Get started</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
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
});
