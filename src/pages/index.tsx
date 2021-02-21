import React, { FC, useEffect } from 'react'
import { navigate } from '@reach/router'
import { getHomepagePath } from '../utils'

export type Props = {}

const Index: FC<Props> = () => {
  useEffect(() => {
    const homepageUrl = getHomepagePath()
    navigate(homepageUrl)
  }, [])
  return null
}

export default Index
export type IndexProps = Props
