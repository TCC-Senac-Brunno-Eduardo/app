import React from 'react';
import { StatusBar as StatusBarReactNative }  from 'react-native';

export default function StatusBar() {
  return (
    <StatusBarReactNative style="auto" barStyle="dark-content" backgroundColor="#000000" translucent={true} hidden={false}/>
  );
}