import React from 'react';

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import { colors } from './src/constants/colors';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

import Header from './src/components/Header';
import SearchBox from './src/components/SearchBar/SearchBox';
import SortAndResultLine from './src/components/SortAndResultLine';
import InternalSection from './src/components/InternalSection';
import OrderCard from './src/pages/OrderHistory/OrderCard';
import OrderHistory from './src/pages/OrderHistory';
import OrderDetails from './src/pages/OrderDetails';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
  
};

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor: colors.background,
  },
  container: {
    
    paddingHorizontal:20
  },
});

export default App;
