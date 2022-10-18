import React from 'react'
import { Office } from './style'

type Props = {
  children: string;
}
const index = ({children}: Props) => {
  return (
    <Office>{children}</Office>
  )
}

export default index