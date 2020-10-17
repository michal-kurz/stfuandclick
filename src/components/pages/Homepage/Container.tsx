import React, { FC, useState } from 'react'
import { navigate } from '@reach/router'
import Homepage, { HomepageProps } from './Homepage'
import { useDispatch } from 'react-redux'

import * as GTC from '../../../store/_global/thunkCreators'
import { getTeamPath } from '../../../utils'

export type ContainerProps = Omit<HomepageProps, ''>

const Container: FC<ContainerProps> = ({}) => {
  const dispatch = useDispatch()
  const [teamName, setTeamName] = useState('')

  const recordClick = async () => {
    await dispatch(GTC.recordClick({ teamName }))
    const teamUrl = getTeamPath(teamName)
    navigate(teamUrl)
  }

  return <Homepage recordClick={recordClick} teamName={teamName} setTeamName={setTeamName} />
}

export default Container
