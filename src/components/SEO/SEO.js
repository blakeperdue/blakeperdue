/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from 'images/favicon.ico'

const metaDescription = 'My name is Blake. I like to create things. This is a collection of some of my recent projects.'
const metaTitle = 'Blake Perdue – Product leader, designer and sometimes engineer'

const SEO = ({ theme, language }) => (
  <Helmet
    htmlAttributes={{
      lang: language,
    }}
    title={metaTitle}
    titleTemplate={`%s`}
    description={metaDescription}
    icon={favicon}
    meta={[
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: metaTitle,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: 'Blake Perdue'
      },
      {
        name: `twitter:title`,
        content: metaTitle,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
    ]}
  >
    <body class={theme} />
  </Helmet>
)

export default SEO
