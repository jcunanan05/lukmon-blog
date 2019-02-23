import { graphql } from 'gatsby'
import IndexPage from '../pages-components/index'

export const query = graphql`
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
`

export default IndexPage
