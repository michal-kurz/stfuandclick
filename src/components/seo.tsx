/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { EMPTY_ARRAY } from '../utils'

type Meta = JSX.IntrinsicElements['meta']

type Props = {
  title: string
  description?: string
  lang?: string
  meta?: Meta[]
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const robotoUrl =
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,600&display=swap'

const SEO: FC<Props> = ({ description, lang, meta = EMPTY_ARRAY, title }) => {
  const { site } = useStaticQuery(query)

  const metaDescription = description || site.siteMetadata.description

  const baseMeta: Meta[] = [
    { name: `description`, content: metaDescription },
    { property: `og:title`, content: title },
    { property: `og:description`, content: metaDescription },
    { property: `og:type`, content: `website` },
    { name: `twitter:card`, content: `summary` },
    { name: `twitter:creator`, content: site.siteMetadata.author },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: metaDescription },
  ]

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[...baseMeta, ...meta]}
      link={[{ rel: 'stylesheet', href: robotoUrl }]}
    />
  )
}

export default SEO
