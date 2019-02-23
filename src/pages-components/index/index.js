import React from 'react'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import PostList from './Post/PostList'
import style from './index.module.css'
import typography from '../Typography.module.css'

const IndexPage = ({ data }) => {
  const { allWordpressPost } = data
  return (
    <Layout>
      <Section>
        <div className="columns">
          <div className="column is-8">
            <h2 className={`title is-3 ${typography.Primary}`}>Latest Posts</h2>
            <PostList posts={allWordpressPost} />
          </div>
          <div
            className={`
              column is-4
              ${style.SecondColumn}
            `}
          >
            <h2 className={`title is-3 ${typography.Primary}`}>Popular</h2>
            <div className={`box ${style.Box}`} />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
