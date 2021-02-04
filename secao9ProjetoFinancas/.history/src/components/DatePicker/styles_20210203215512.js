import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${Platform.OS === 'ios' ? '#000000' : 'transparent'};
  position: absolute;
  justify-content: flex-end;

  width: 100%;
  height: 100%;
`;
