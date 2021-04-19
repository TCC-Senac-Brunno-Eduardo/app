import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  background: white;
  padding: 8px;
  border-radius: 5px;
  flex: 0
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
`;

export const ContainerInput = styled.View`
  flex: 0.8;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px
`;

export const ContainerButton = styled.View`
  flex: 0.2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45px;
  font-weight: bold
`;

export const Input = styled.TextInput`
`;

export const ClearButton = styled.TouchableOpacity`
`;