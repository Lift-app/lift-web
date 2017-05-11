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
  state.posts[postIndex].like_count++

  if (state.post) {
    state.post.liked = true
    state.post.like_count++
  }
}

export const unlikePost = (state, id) => {
  const postIndex = state.posts.findIndex((post) => post.id === id)

  state.posts[postIndex].liked = false
  state.posts[postIndex].like_count--

  if (state.post) {
    state.post.liked = false
    state.post.like_count--
  }
}
