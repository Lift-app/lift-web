export const SET_POSTS = (state, posts) => {
  state.posts = posts.data
}

export const APPEND_POSTS = (state, posts) => {
  posts.data.forEach((post) => state.posts.push(post))
}

export const SET_POST = (state, post) => {
  state.post = post.data
}

export const SET_COMMENTS = (state, data) => {
  state.post.comments = data.comments
}

export const SET_COMMENT = (state, data) => {
  const postId = parseInt(data.data.id)
  const postIndex = state.posts.findIndex((post) => post.id === postId)

  state.posts[postIndex].comment_count++
  state.post.comments.unshift(data.comment)
}

export const SET_USER = (state, user) => {
  state.user = user
}

export const SET_PROFILE = (state, profile) => {
  state.profile = profile
}

export const SET_CATEGORIES = (state, cat) => {
  state.categories = cat.data
}

export const follow = (state, id) => {
  state.profile.following = true
  state.profile.follower_count++
}

export const unfollow = (state, id) => {
  state.profile.following = false
  state.profile.follower_count--
}

export const like = (state, [id, type]) => {
  if (type === 'posts') {
    const postIndex = state.posts.findIndex((post) => post.id === id)

    state.posts[postIndex].liked = true
    state.posts[postIndex].like_count++

    if (state.post) {
      state.post.liked = true
      state.post.like_count++
    }
  } else if (type === 'comments') {
    const commentIndex = state.post.comments.findIndex(
      (comment) => comment.id === id
    )

    state.post.comments[commentIndex].liked = true
    state.post.comments[commentIndex].like_count++
  }
}

export const unlike = (state, [id, type]) => {
  if (type === 'posts') {
    const postIndex = state.posts.findIndex((post) => post.id === id)

    state.posts[postIndex].liked = false
    state.posts[postIndex].like_count--

    if (state.post) {
      state.post.liked = false
      state.post.like_count--
    }
  } else if (type === 'comments') {
    const commentIndex = state.post.comments.findIndex(
      (comment) => comment.id === id
    )

    state.post.comments[commentIndex].liked = false
    state.post.comments[commentIndex].like_count--
  }
}
