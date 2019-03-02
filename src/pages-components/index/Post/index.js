import React from 'react'
import { Link } from 'gatsby'
import style from './Post.module.css'

const PostImage = ({ media = null }) => {
  if (!media) return null
  return (
    <img
      className="image content"
      src={media.localFile.childImageSharp.fixed.src}
      alt="Post"
    />
  )
}

const PostTitle = ({ title, slug }) => {
  return (
    <h1
      className={`
        title is-4
        ${style.Title}
      `}
    >
      <Link to={`/post/${slug}`} dangerouslySetInnerHTML={{ __html: title }} />
    </h1>
  )
}

/**
 * @function Post - Post component, not the post pages
 * @param {string} [className = ''] - className to pass
 */

const Post = ({
  className = '',
  title,
  author,
  date,
  content,
  slug = '',
  photo,
}) => {
  return (
    <article
      className={`
        Post
        ${className}
        ${style.Post}
      `}
    >
      <PostImage media={photo} />
      <PostTitle title={title} slug={slug} />
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
