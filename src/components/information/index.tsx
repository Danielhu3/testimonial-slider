import React from 'react'
import Button from '../button/';
import ButtonGroup  from '../buttonGroup/';
import LeftContent  from '../leftContent/';
import Name  from '../name/';
import Office  from '../office/';
import Photo  from '../photo/';
import ProfileInfo  from '../profileInfo/';
import RightContent from '../rightContent/';
import Text  from '../text/';
import { Information } from './style'
const testimonialList: List[] = [
  {
    name: 'Tanya Sinclair',
    office: 'UX Engineer',
    text: `"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."`,
    photo: 'image-tanya'
  },

  {
    name: 'John Tarkpor',
    office: 'Junior Front-end Developer',
    text: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    photo: 'image-john'
  },

  {
    name: 'Carlos Silva',
    office: 'Junior Back-end Developer',
    text: "90% of what I learned was from this course, I highly recommend it",
    photo: 'image-carlos'
  },

]

type Props ={
  actualSlider: number;
  setActualSlider: React.Dispatch<React.SetStateAction<number>>;
}

interface List{
  name:string;
  office:string;
  text:string;
  photo:string;
}



const index = ({actualSlider, setActualSlider}: Props) => {
  
  const sliderId = testimonialList.at(actualSlider)
  
    if(typeof sliderId !== "undefined"){
      return (
        <Information>
          
          <LeftContent>
            <Text>{sliderId.text}</Text>
            <ProfileInfo>
              <Name>{sliderId.name}</Name>
              <Office>{sliderId.office}</Office>
            </ProfileInfo>
          </LeftContent>
          
          <RightContent>
            <Photo photo={sliderId.photo} />
            <ButtonGroup>
              <Button setActualSlider={setActualSlider} actualSlider={actualSlider} operation={'previous'} limit={testimonialList.length} />
              <Button setActualSlider={setActualSlider} actualSlider={actualSlider} operation={'next'} limit={testimonialList.length} />
            </ButtonGroup>
          </RightContent>
          
        </Information>
      )
    }

    return(
      <Information></Information>
    )
  
}

export default index