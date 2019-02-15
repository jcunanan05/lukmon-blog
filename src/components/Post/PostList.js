import React, { Component } from 'react'
import Post from './index'

/**
 * @class PostList
 * @param {Object} posts - edges from graphql query
 */

class PostList extends Component {
  renderPosts = () => {
    const { edges } = this.props.posts
    return edges.map(edge => {
      const { id, title, excerpt, author, date, slug } = edge.node
      const { name } = author
      return (
        <Post
          className="box"
          key={id}
          author={name}
          content={excerpt}
          title={title}
          date={date}
          slug={slug}
        />
      )
    })
  }

  render() {
    return <div>{this.renderPosts()}</div>
  }
}

export default PostList
