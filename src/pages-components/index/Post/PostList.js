import React, { Component, Fragment } from 'react'
import Post from './index'

/**
 * @class PostList
 * @param {Object} posts - edges from graphql query
 */

class PostList extends Component {
  renderPost(post) {
    const { id, title, excerpt, author, date, slug, featured_media } = post
    const photo = () => {
      if (featured_media === null) return null
      return featured_media.localFile.childImageSharp.fixed.src
    }
    return (
      <Post
        key={id}
        author={author.name}
        content={excerpt}
        title={title}
        date={date}
        slug={slug}
        photoUrl={photo()}
      />
    )
  }

  renderPosts = () => {
    if (!this.props.posts) return null
    return this.props.posts.map(({ node: post }) => this.renderPost(post))
  }

  render() {
    return <Fragment>{this.renderPosts()}</Fragment>
  }
}

export default PostList
