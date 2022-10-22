import React from "react";
import WelcomeView from "../views/welcomeView";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootTabScreenProps } from '../types';
import useColorScheme from "../hooks/useColorScheme";

export default function WelcomePresenter(props: any, {navigation}: RootTabScreenProps<'TabOne'>) {

  const colorScheme = useColorScheme(); 

  function getStartedACB() {
    props.navigation.navigate('Login')
  }
  return <WelcomeView 
          getStarted={getStartedACB}
          colorScheme={colorScheme}
          />
}
