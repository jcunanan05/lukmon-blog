import React from 'react'
import { Link } from 'gatsby'

const Post = ({ className = '', title, author, date, content, slug = '' }) => {
  return (
    <article className={`Post ${className}`}>
      <h1 className="title is-4">
        <Link to={slug}>{title}</Link>
      </h1>
      <p className="subtitle is-6">{`${author} - ${date}`}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export default Post
