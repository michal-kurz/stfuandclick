import React, { FC, useEffect, useState } from 'react'
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

  // This is a hack to circumvent a problem with emotion. I need to first mount nothing, otherwise
  // emotion applies wrong css when redirecected via netlify _redirects:
  // https://stackoverflow.com/questions/65081032/gatsby-spa-deployed-on-netlify-applies-wrong-emotion-css-on-first-load-distille
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => setShow(true), 1)
  }, [])
  if (!show) return null

  return <Homepage recordClick={recordClick} teamName={teamName} setTeamName={setTeamName} />
}

export default Container
