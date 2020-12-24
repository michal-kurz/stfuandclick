import React, { FC, useState } from 'react'
import { navigate, RouteComponentProps, useLocation } from '@reach/router'
import { useDispatch } from 'react-redux'
import Homepage from './Homepage'

import * as GTC from '../../../store/_global/thunkCreators'
import { getTeamPath } from '../../../utils'

export type ContainerProps = RouteComponentProps

const Container: FC<ContainerProps> = () => {
  const dispatch = useDispatch()
  const [teamName, setTeamName] = useState('')
  const recordClick = async () => {
    await dispatch(GTC.recordClick({ teamName }))
    const teamUrl = getTeamPath(teamName)
    navigate(teamUrl)
  }

  console.log('HOMEPAGE >', useLocation().href)
  return (
    <div>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <Homepage recordClick={recordClick} teamName={teamName} setTeamName={setTeamName} />
    </div>
  )
}

export default Container
