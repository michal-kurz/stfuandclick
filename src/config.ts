import axios from 'axios'
import { enableES5, enableMapSet } from 'immer'

const BASE_URL = 'https://klikuj.herokuapp.com/api/v1/'

const applyConfig = () => {
  axios.defaults.baseURL = BASE_URL
  enableMapSet()
  enableES5()
}

export default applyConfig
