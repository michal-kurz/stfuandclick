import React, { FC, useState } from 'react'
import { navigate, RouteComponentProps } from '@reach/router'
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

  // the outer div wrapper is a hack circumventing a bug in emotion
  // https://stackoverflow.com/questions/65081032/gatsby-spa-deployed-on-netlify-applies-wrong-emotion-css-on-first-load-distille
  return (
    <div>
      <Homepage recordClick={recordClick} teamName={teamName} setTeamName={setTeamName} />
    </div>
  )
}

export default Container
