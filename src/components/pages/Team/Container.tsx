import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from '@reach/router'
import Team from './Team'

import * as GTC from '../../../store/_global/thunkCreators'

export type ContainerProps = RouteComponentProps<{
  teamName: string
}>

const Container: FC<ContainerProps> = ({ teamName = '' }) => {
  const dispatch = useDispatch()

  const recordClick = () => dispatch(GTC.recordClick({ teamName }))

  return <Team recordClick={recordClick} teamName={teamName} />
}

export default Container
