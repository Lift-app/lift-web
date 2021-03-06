// Use getters to retrieve data from the state, and possibly filter / modify it before returning it.
export const fetchPosts = state => {
  return state.posts
}

// Use getters to retrieve data from the state, and possibly filter / modify it before returning it.
export const fetchPopularPosts = state => {
  return state.popular
}

export const getPostById = (state, getters) => (id) => {
  return state.posts.find(post => post.id === id)
}
