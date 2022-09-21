import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from 'react-redux';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { getAPI} from "./webAPI"
import { useSelector, useDispatch } from 'react-redux';

//import { ApplicationState,  getMeal} from './redux';

import {getMeal} from './redux/actions/getMealActions';

export default function App() {
  const [fetchedData, setFetchedData] = React.useState("");
  // React.useEffect(()=>{
  //   getAPI().then(data => {setFetchedData(data)

  // })
  // }, [])
  
  const dispatch = useDispatch(); 
  const onClick = () => {
    dispatch(getMeal() as any);
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!</Text>
      <button onClick={onClick}>Get Meal</button>
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
