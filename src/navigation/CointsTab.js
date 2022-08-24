import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { DetailCoinScreen } from '../screens/DetailCoinScreen';
import { CoinsScreen } from '../screens/CoinsScreen';
import { NewsScreen } from '../screens/NewsScreen';


const Stack = createStackNavigator();

export const CoinsTab = () => {
  return (
    <Stack.Navigator
       screenOptions={{
           headerTitleAlign: 'center',
           headerShown: true,
           title: 'BitiU',
           cardStyle: {
               backgroundColor: 'white',
           },
       }}>
      <Stack.Screen name="CoinsScreen" component={CoinsScreen} />
      <Stack.Screen name="DetailCoinScreen" component={DetailCoinScreen}/>
      <Stack.Screen name="NewsScreen" component={NewsScreen}/>
    </Stack.Navigator>
  );
};