import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Container = styled.View`
  padding: 16px;
`;

export const ContainerHeader = styled.View`
  padding: 16px;
`;

export const Title = styled.Text`
  font-weight: bold;
  text-align: center; 
  font-size: 18px;
  padding: 16px;
`;

export const ContainerForm = styled.View`
  margin: 24px 0px 24px 0px
`;

export const InputGroup = styled.View`
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const TitleInput = styled.TextInput`
  padding: 8px;
  min-height: 40px;
  border-bottom-width: 1px;
  border-color:  ${props => (!props.errorStyle ? '#000' : 'red')};
`;

export const DescriptionInput = styled.TextInput`
  padding: 8px;
  border-bottom-width: 1px;
  border-color:  ${props => (!props.errorStyle ? '#000' : 'red')};
`;

export const InputErrorMessage = styled.Text`
  color: red;
  margin-top: 5px;
`;

export const ContainerAddress = styled.View`
  flex: 0;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  min-height: 80px;
  margin-bottom: 16px;
  background: #f5f5f5;
  border-radius: 5px;
`;

export const ViewAddressContainer = styled.View`
  flex: 0.8;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const EditAddressContainer = styled.View`
  flex: 0.2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-left-width: 1px;
  border-color: #c7c7c7;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const ButtonCancel = styled.TouchableOpacity`
  background: #FF0000;
  padding: 12px 24px;
  border-radius: 5px;
  color: #fff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background: #00a830;
  padding: 12px 24px;
  border-radius: 5px;
  color: #fff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;
