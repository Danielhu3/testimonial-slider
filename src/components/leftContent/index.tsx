import React from 'react'
import { LeftContent } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children} : Props) => {
  return (
    <LeftContent>
        {children}
    </LeftContent>
  )
}

export default index