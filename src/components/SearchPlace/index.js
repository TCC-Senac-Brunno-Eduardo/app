import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  ContainerInput,
  ContainerButton,
  Input,
  ClearButton
} from './styles';

export default function SearchPlace() {

  const [ text, setText ] = useState(null);

  const handleChangeSearch = (text) => {
    setText(text)
  }

  const handleClear = (e) => {
    setText(null)
  }

  return (
    <Container>
      <ContainerInput>
        <Input placeholder='Procure algum local...' value={text} onChangeText={handleChangeSearch} />
      </ContainerInput>
      <ContainerButton>
        <ClearButton onPress={handleClear}>
          <MaterialCommunityIcons name="close" size={32} color="black" type="solid" titleProps={{accessibilityHint: 'Limpar busca', accessibilityLabel:"Limpar busca", accessible:"true" }}/>
        </ClearButton>
      </ContainerButton>
    </Container>
  );
}

