import React from 'react'
import { Text } from './style'

type Props = {
  children: string;
}
const index = ({children}: Props) => {
  return (
    <Text>{children}</Text>
  )
}

export default index