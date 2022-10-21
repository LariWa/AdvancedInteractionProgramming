import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { Appearance } from 'react-native'; //this is used to get a dark mode for the appearance
import Navigation from "./navigation";
import SnackbarPresenter from "./presenters/snackbarPresenter";

export default function App() {
  const isLoadingComplete = useCachedResources();
  //const colorScheme = useColorScheme();
  const colorScheme = Appearance.getColorScheme();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <SnackbarPresenter />
      </SafeAreaProvider>
    );
  }
}
