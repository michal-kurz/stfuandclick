import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps, useLocation } from '@reach/router'
import Team from './Team'

import * as GTC from '../../../store/_global/thunkCreators'

export type ContainerProps = RouteComponentProps<{
  teamName: string
}>

const Container: FC<ContainerProps> = ({ teamName = '' }) => {
  const dispatch = useDispatch()

  const recordClick = () => dispatch(GTC.recordClick({ teamName }))
  console.log('TEAM >', useLocation().href)

  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => setShow(true), 10)
  }, [])

  if (!show) return null

  return <Team recordClick={recordClick} teamName={teamName} />
}

export default Container
