import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

export const Title = styled.Text`
  color: ${(props) => props.cor};
  font-size: 25px;
`;

export const Nome = styled.Text`
  color: #ffffff;
  font-size: 20px;
`;

export const BotaoSujeito = styled.TouchableOpacity`
  background-color: #dddddd;
  padding: 5px;
  border-radius: 5px;
  width: 90%;
  align-items: center;
  margin-top: 10px;
`;

export const BotaoEntrar = styled.Text`
  color: #000000;
  font-size: 20px;
`;
