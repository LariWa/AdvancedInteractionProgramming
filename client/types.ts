type promiseStateType = {
  promise: any | null;
  data: null | { data: any };
  error: String | null;
};
type test = {
  promise: any;
  data: Object | null;
  error: String | null;
};
export type { promiseStateType, test };
/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Favourites: undefined;
  Login: undefined;
  Registration: undefined;
  Recipe: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined; //for welcomeView
  TabTwo: undefined; //for loginView
  TabThree: undefined; //for registerView
  TabFour: undefined; //for searchView
  TabFive: undefined; //for reciptVIew
  TabSix: undefined; //for favouritesView
  TabSeven: undefined; //for groceryListView
  TabEight: undefined; //for frameView
  Search: undefined;
  Favourites: undefined;
  Groceries: undefined;
  Recipe: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
