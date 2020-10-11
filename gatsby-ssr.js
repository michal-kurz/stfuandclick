import React from 'react'
import applyConfig from './src/config'
import AppRoot from './src/components/layouts/AppRoot'

export const onClientEntry = () => {
  applyConfig()
}

export const wrapRootElement = ({ element }) => <AppRoot>{element}</AppRoot>
