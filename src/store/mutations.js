export const SET_POSTS = (state, posts) => {
  state.posts = posts.data
}

export const SET_POST = (state, post) => {
  state.post = post.data
}

export const SET_CATEGORIES = (state, cat) => {
  state.categories = cat.data
}

export const likePost = (state, id) => {
  const postIndex = state.posts.findIndex((post) => post.id === id)

  state.posts[postIndex].liked = true
  state.posts[postIndex].likes++

  if (state.post) {
    state.post.liked = true
    state.post.likes++
  }
}

export const unlikePost = (state, id) => {
  const postIndex = state.posts.findIndex((post) => post.id === id)

  state.posts[postIndex].liked = false
  state.posts[postIndex].likes--

  if (state.post) {
    state.post.liked = false
    state.post.likes--
  }
}
