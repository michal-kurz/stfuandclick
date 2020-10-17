import React, { FC } from 'react'
import { Redirect } from '@reach/router'

export type Props = {}

const Index: FC<Props> = ({}) => {
  return <Redirect to="/app/" />
}

export default Index
export type IndexProps = Props
