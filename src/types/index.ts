import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type UserType = {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
};

export type ResultUserType = {
  rank: number;
  search: boolean;
  name: string;
  bananas: number;
  uid: string;
};

export type UserData = {
  [key: string]: UserType;
};

export type StackNavigatorParamList = {
  Home: undefined;
  Result: {
    text: string;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<StackNavigatorParamList, 'Result'>;

export type ResultScreenRouteProp = RouteProp<StackNavigatorParamList, 'Result'>;
