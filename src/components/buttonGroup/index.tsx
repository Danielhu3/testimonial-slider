import React from 'react'
import { ButtonGroup } from './style';

type Props = {
    children: JSX.Element[];
}
const index = ({children}: Props) => {
  return (
    <ButtonGroup>{children}</ButtonGroup>
  )
}

export default index