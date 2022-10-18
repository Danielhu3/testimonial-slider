import React from 'react'
import Information  from '../information/';
import { Slider } from './style'


const Index = () => {
  const [actualSlider, setActualSlider] = React.useState(0);
  return (
    <Slider>
      <Information actualSlider = {actualSlider} setActualSlider ={setActualSlider}/>
    </Slider>
  )
}

export default Index