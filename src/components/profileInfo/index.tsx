import React from 'react'
import { ProfileInfo } from './style'

type Props = {
    children:JSX.Element[];
}
const index = ({children}:Props) => {
  return (
    <ProfileInfo>
        {children}
    </ProfileInfo>
  )
}

export default index