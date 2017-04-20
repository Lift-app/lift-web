// Use getters to retrieve data from the state, and possibly filter / modify it before returning it.
export default {
  getPosts: state => {
    return state.posts
  }
}
