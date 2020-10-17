import React, { FC } from 'react'
import Team from './Team'
import { useDispatch } from 'react-redux'

import * as GTC from '../../../store/_global/thunkCreators'
import { RouteComponentProps } from '@reach/router'

export type ContainerProps = RouteComponentProps<{
  teamName: string
}>

const Container: FC<ContainerProps> = ({ teamName = '' }) => {
  const dispatch = useDispatch()

  const recordClick = () => dispatch(GTC.recordClick({ teamName }))

  return <Team recordClick={recordClick} teamName={teamName} />
}

export default Container
