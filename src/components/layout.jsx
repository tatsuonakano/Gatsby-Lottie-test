/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"

const Layout = ({ children }) => {

  return (
    <>
      <body className={bodystyle}>
                {children}
      </body>
    </>
  )
}


export default Layout
