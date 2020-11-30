import React, { FC, useEffect } from 'react'
import { navigate } from '@reach/router'

export type Props = {}

const Index: FC<Props> = () => {
  useEffect(() => {
    navigate('/app/')
  }, [])
  return null
}

export default Index
export type IndexProps = Props
