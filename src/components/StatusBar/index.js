import React from 'react';
import { StatusBar as StatusBarReactNative }  from 'react-native';

export default function StatusBar() {
  return (
    <StatusBarReactNative style="auto" barStyle="light-content" backgroundColor="#000" translucent={true} hidden={false}/>
  );
}