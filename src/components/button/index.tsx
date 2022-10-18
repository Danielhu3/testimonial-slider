import React from 'react'
import { Button } from './style'

type Props ={
  setActualSlider: React.Dispatch<React.SetStateAction<number>>;
}
const index = ({setActualSlider}: Props) => {
  function changeSlide(){
    setActualSlider((actualSlider)=> actualSlider+1)

  }
  return (
    <Button onClick={changeSlide}>Mudar</Button>
  )
}

export default index