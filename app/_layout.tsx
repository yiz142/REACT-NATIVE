// filepath: /C:/Users/lukel/OneDrive/Documents/School/UCSD/2024/DSC180B/REACT-NATIVE/app/_layout.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from './index';
import About from './About';
import Chat from './Chat';

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Index} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}