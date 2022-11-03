import React from 'react'
import { Name } from './style'

type Props = {
  children: string;
}
const index = ({children}:Props) => {
  return (
    <Name>{children}</Name>
  )
}

export default index