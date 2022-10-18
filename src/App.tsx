import React from 'react';
import  Slider  from './components/slider/';
import GlobalStyle from './styles/global';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Slider></Slider>
    </div>
  );
}

export default App;
/*

  Slider
    Informations
      Button
      Text
      Photo
      Name
      Office

  O array com as informações vai ser criado dentro do Informations - FEITO
  O State que controla qual foto será exibida será criado dentro do Slider, mas, será manipulado dentro do Button (provavelmente)

  */
