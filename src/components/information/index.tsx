import React from 'react'
import Button from '../button/';
import Name  from '../name/';
import Office  from '../office/';
import Text  from '../text/';
import { Information } from './style'
const testimonialList: List[] = [
  {
    name: 'Tanya Sinclair',
    office: 'UX Engineer',
    text: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
  },

  {
    name: 'John Tarkpor',
    office: 'Junior Front-end Developer',
    text: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "
  }
]

type Props ={
  actualSlider: number;
  setActualSlider: React.Dispatch<React.SetStateAction<number>>;
}

interface List{
  name:string;
  office:string;
  text:string;
}



const index = ({actualSlider, setActualSlider}: Props) => {
  
  const sliderId = testimonialList.at(actualSlider)
  
    if(typeof sliderId !== "undefined"){
      return (
        <Information>
          <Text>{sliderId.text}</Text>
          <Name>{sliderId.name}</Name>
          <Office>{sliderId.office}</Office>
          <Button setActualSlider={setActualSlider}/>
        </Information>
      )
    }

    return(
      <Information></Information>
    )
  
}

export default index