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
          }
          date(formatString: "MMMM DD, YYYY")
          slug
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 600, height: 300) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
