import React from 'react'
import { Photo } from './style'


type Props = {
  photo:string;
}

const index = ({photo}:Props) => {
  const sliderPhoto = require(`../../images/${photo}.jpg`)
  return (
    <Photo src={String(sliderPhoto)}></Photo>
  )
}

export default index