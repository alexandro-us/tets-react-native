import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { NewsScreen } from '../screens/NewsScreen';
import { CoinsTab } from './CointsTab';


const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={{
            headerTitleAlign: 'center',
            tabBarActiveTintColor: '#5856D5',
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255, 1.0)',
                paddingBottom: 10, //( Platform.OS === 'ios') ? 0 : 10,
                borderWidth: 0,
                elevation: 0,
                height: 60,//( Platform.OS === 'ios') ? 70 : 80,
            },
        }}
    >
      <Tab.Screen
        name="Monedas"
        component={CoinsTab}
        options={{
            headerShown: false,
            tabBarLabel: 'Monedas',
            tabBarIcon: ({color}) => (
                <Icon
                    color={color}
                    size={20}
                    name="home-outline"
                />
            ),
        }}/>
      <Tab.Screen
        name="Noticias"
        component={NewsScreen}
        options={{
            headerShown: true,
            title: 'BitiU',
            tabBarLabel: 'Noticias',
            tabBarIcon: ({color}) => (
                <Icon
                    color={color}
                    size={20}
                    name="newspaper-outline"
                />
            ),
        }}/>
    </Tab.Navigator>
  );
};

