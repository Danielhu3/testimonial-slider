import React from 'react'
import { Button } from './style'
import image from '../../images/icon-prev.svg'

type Props ={
  setActualSlider: React.Dispatch<React.SetStateAction<number>>;
  actualSlider: number;
  operation:string;
  limit: number;
  icon: string;
}
const index = ({setActualSlider, operation,limit, actualSlider, icon}: Props) => {

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
    <Button onClick={changeSlide} icon={`../../images/icon-${icon}.svg`} style={{backgroundImage:`url(${image})`}}></Button>
  )
}

export default index

/*
  <Button onClick={changeSlide} icon={`../../images/icon-${icon}.svg`} ></Button>
 */