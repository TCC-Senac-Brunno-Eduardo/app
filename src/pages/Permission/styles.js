import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding-top: 20px;
`;

export const Container = styled.View`
  position: relative;
  background: #fff;
  flex: 1;
  padding: 16px;
  justify-content: center;
  align-items: center
`;

export const Titulo = styled.Text`
  text-align: center;
  font-weight: 700;
  font-size: 24px
  margin-bottom: 20px
`;

export const Text = styled.Text`
  text-align: center;
  margin-bottom: 10px;
`;

export const BotaoAcao = styled.TouchableOpacity`
  text-align: center;
  background: #000;
  color: #fff;
  padding: 8px 24px;
  margin-top: 30px;
  border-radius: 5px
`;

export const TextoBotao = styled.Text`
  text-align: center;
  color: #fff;
`;