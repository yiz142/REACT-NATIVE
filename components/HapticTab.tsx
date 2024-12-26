// filepath: /c:/Users/lukel/OneDrive/Documents/School/UCSD/2024/DSC180B/REACT-NATIVE/components/HapticTab.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';


export function HapticTab({ children, ...props }) {
  return (
    <TouchableOpacity {...props}>
      {children}
    </TouchableOpacity>
  );
}