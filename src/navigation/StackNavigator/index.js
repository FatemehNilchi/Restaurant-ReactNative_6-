import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrderHistory from '@pages/OrderHistory';
import OrderDetails from '@pages/OrderDetails';
import Meats from '@pages/Meats';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="Meats" component={Meats} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
