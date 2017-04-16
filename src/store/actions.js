import config from '@/config/config'
import axios from 'axios' // We use Axios for AJAX calls

export const getPostsFromApi = ({ commit }) => {
  axios.get(`${config.apiUrl}/posts`)
    .then((response) => {
      // Commit the data into SET_POSTS - see mutations.js
      commit('SET_POSTS', response.data)
    })
    .catch((error) => {
      if(config.debug) { console.error(error) }
    })
}

export const placePost = ({ commit }, arg) => {
  axios.post(`${config.apiUrl}/posts`, {
    user_id: arg.user_id,
    category_id: arg.category_id,
    body: arg.body
  })
    .then((response) => {
      console.log('success', response)
    })
    .catch((error) => {
      if(config.debug) { console.error(error) }
    })
}
