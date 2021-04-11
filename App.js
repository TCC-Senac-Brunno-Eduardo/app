import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import Main from './src/pages/Main'

export default function App() {

  const theme = {
    colors: {
      primary: 'black',
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </>
  );
}



