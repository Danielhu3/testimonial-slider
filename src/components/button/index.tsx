import React from 'react'
import { Button } from './style'

type Props ={
  setActualSlider: React.Dispatch<React.SetStateAction<number>>;
  actualSlider: number;
  operation:string;
  limit: number;
}
const index = ({setActualSlider, operation,limit, actualSlider}: Props) => {
  function changeSlide(){
    if(operation === 'previous'){
      if(actualSlider === 0){
        setActualSlider(limit-1)
      }
      else{
        setActualSlider((actualSlider)=> actualSlider-1)
      }
    }

    if(operation === 'next'){
      if(actualSlider === limit-1){
        setActualSlider(0)
      }
      else{
        setActualSlider((actualSlider)=> actualSlider+1)
      }
      
    }
    

  }
  return (
    <Button onClick={changeSlide}>{operation}</Button>
  )
}

export default index