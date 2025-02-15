/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// const path = require("path")

// // Implement the Gatsby API “createPages”. This is called once the
// // data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Query for markdown nodes to use in creating pages.
//   const result = await graphql(
//     `
//       {
//         allMarkdownRemark(limit: 1000) {
//           edges {
//             node {
//               frontmatter {
//                 path
//               }
//             }
//           }
//         }
//       }
//     `
//   )

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   // Create pages for each markdown file.
//   const blogPostTemplate = path.resolve(`src/pages/test.js`)
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     const path = node.frontmatter.path
//     createPage({
//       path,
//       component: blogPostTemplate,
//       // In your blog post template's graphql query, you can use pagePath
//       // as a GraphQL variable to query for data from the markdown file.
//       context: {
//         pagePath: path,
//       },
//     })
//   })
// }