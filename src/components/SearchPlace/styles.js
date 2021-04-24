import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  background: white;
  padding: 8px;
  border-radius: 5px;
  flex: 1
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
`;

export const ContainerInput = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
`;

export const ClearButton = styled.TouchableOpacity`
`;