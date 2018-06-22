import	React from 'react'
import Link from 'gatsby-link';

const BlogPage = ({ data }) => (
		<div>
		 <div className="wrapperVessel">
			<h1>Senaste Posts</h1>
			{data.allMarkdownRemark.edges.map(post => (
			<div key={post.node.id}>
				<h3>{post.node.frontmatter.title}</h3>
				<small>Postad av {post.node.frontmatter.author} den {post.node.frontmatter.date}</small>
				<br />
				<br />
				<Link to={post.node.frontmatter.path}>Läs mer</Link>
				<br />
				<br />
				<hr />	
			</div>
				))}
			</div>
		</div>

)

export const pageQuery = graphql`
query BlogIndexQuery {
  allMarkdownRemark {
    edges {
      node {
      	id
        frontmatter {
          path
          title
          date
          author
        }
      }
    }
  }
}
`
export default BlogPage;