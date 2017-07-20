/**
 * Configures default values for axios
 * @see https://github.com/mzabriskie/axios#config-defaults
 */
import axios from 'axios'

axios.defaults.baseURL =  // example : https://www.mysite.com/api/
axios.defaults.headers.common.Authorization =  // example: `Bearer ...`

export default axios
