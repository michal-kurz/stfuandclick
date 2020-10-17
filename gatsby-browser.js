import applyConfig from './src/config'

// eslint-disable-next-line import/prefer-default-export
export const onClientEntry = () => {
  applyConfig()
}
