import React from 'react';

import * as S from './src/styledComponents/style';

const App = () => {
  return (
    <S.Container>
      <S.Title cor="#ff0000">Uai imposto</S.Title>
      <S.Nome>Ola Saron</S.Nome>

      <S.BotaoSujeito>
        <S.BotaoEntrar>Entrar</S.BotaoEntrar>
      </S.BotaoSujeito>
    </S.Container>
  );
};

export default App;
