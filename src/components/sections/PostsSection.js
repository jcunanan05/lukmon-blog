import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

class PostList extends Component {
  renderPosts = () => {
    const { edges } = this.props.posts
    return edges.map(edge => {
      const { id, title, excerpt, author, date } = edge.node
      return (
        <article className="box content" key={id}>
          <h1 className="title is-4">{title}</h1>
          <p className="subtitle is-6">
            {author.name} at {date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </article>
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
