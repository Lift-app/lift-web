import config from '../services/config.service'
import axios from 'axios' // We use Axios for AJAX calls

export const getPostsFromApi = ({ commit }, arg) => {
  axios.get(`${config.apiUrl}/categories`, {
    limit: arg.limit
  })
    .then((response) => {
      // Commit the data into SET_POSTS - see mutations.js
      commit('SET_POSTS', response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
