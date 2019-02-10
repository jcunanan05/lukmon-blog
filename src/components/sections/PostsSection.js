import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Post from '../Post'

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

const PostsSection = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressPost {
            edges {
              node {
                id
                title
                excerpt
                author {
                  name
                  slug
                  avatar_urls {
                    wordpress_48
                  }
                }
                date(formatString: "MMMM DD, YYYY")
                slug
              }
            }
          }
        }
      `}
      render={data => <PostList posts={data.allWordpressPost} />}
    />
  )
}

export default PostsSection
