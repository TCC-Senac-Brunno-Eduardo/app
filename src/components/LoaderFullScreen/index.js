import React from "react";
import { View } from "react-native";
import Loader from '../Loader'
import {
  SafeArea, 
  Container, 
} from './styles';

export default function LoaderFullScreen () {
  return  (
    <SafeArea>
      <Container>
        <Loader size="large" color={'#fff'} />
      </Container>
    </SafeArea>
  )
};
