import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MyTabs } from './src/navigation/MyTabs';

export const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
};

export default App;
