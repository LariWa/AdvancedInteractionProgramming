import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAPI} from "./webAPI"
export default function App() {
  const [fetchedData, setFetchedData] = React.useState("");
  React.useEffect(()=>{
getAPI().then(data => {setFetchedData(data)

})
  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <div>{`${fetchedData}`}</div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
