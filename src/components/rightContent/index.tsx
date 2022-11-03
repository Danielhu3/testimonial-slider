import React from 'react'
import { RightContent } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children} : Props) => {
  return (
    <RightContent>
        {children}
    </RightContent>
  )
}

export default index