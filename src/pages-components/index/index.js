import React from 'react'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import PostList from './Post/PostList'
import SEO from '../../components/Seo'
import style from './index.module.css'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <div className="columns">
          <div className="column is-8">
            <h2 className="title is-3">Latest Posts</h2>
            <div className={style.PostListContainer}>
              <PostList posts={data.allWordpressPost.edges} />
            </div>
          </div>
          <div
            className={`
              column is-4
              ${style.SecondColumn}
            `}
          >
            {/* <h2 className="title is-3">Popular</h2>
            <div className={`box ${style.Box}`} /> */}
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
