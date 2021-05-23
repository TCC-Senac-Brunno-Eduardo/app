import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'react-native-elements';

import MapProvider from './src/contexts/MapContext';
import FormReportProvider from './src/contexts/FormReportContext';
import WebsocketProvider from './src/contexts/WebsocketContext';

import Main from './src/pages/Main'
import Welcome from './src/pages/Welcome';
import Permission from './src/pages/Permission';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {

  const theme = {
    colors: {
      primary: 'black',
    }
  }

  return (
    <WebsocketProvider>
      <MapProvider>
        <FormReportProvider>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <Stack.Navigator  
                initialRouteName="Welcome"
                screenOptions={({ route, navigation }) => ({
                  headerShown: false,
                  gestureEnabled: false,
                  cardOverlayEnabled: true
                })}>
                <Stack.Screen headerShown={false} name="Welcome" component={Welcome} />
                <Stack.Screen name="Permission" component={Permission} />
                <Stack.Screen name="Main" component={Main} />
              </Stack.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </FormReportProvider>
      </MapProvider>
    </WebsocketProvider>
  );
}



