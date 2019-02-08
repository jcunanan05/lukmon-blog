import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import PostsSection from '../components/sections/PostsSection'

const IndexPage = () => {
  return (
    <Layout>
      <Section>
        <div className="columns">
          <div className="column is-8">
            <h2 className="title">Latest Posts</h2>
            <PostsSection />
          </div>
          <div className="column is-4 box" />
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
