import React from 'react'
import { Link } from 'gatsby'
import style from './Post.module.css'

const Post = ({ className = '', title, author, date, content, slug = '' }) => {
  return (
    <article
      className={`
        Post 
        ${className}
        ${style.Post}
      `}
    >
      <h1
        className={`
          title is-4
          ${style.Title}
        `}
      >
        <Link to={slug}>{title}</Link>
      </h1>
      <p
        className={`
          subtitle is-6
        `}
      >
        <strong>{author}</strong>
        {` - ${date}`}
      </p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export default Post
