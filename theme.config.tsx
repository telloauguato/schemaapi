import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Manual McD</span>,
  project: {
    link: 'https://github.com/telloauguato/schemaapi',
  },
  docsRepositoryBase: 'https://github.com/telloauguato/schemaapi',
  footer: {
    text: `SchemaAPI ${new Date().getFullYear()} — by @telloauguato`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – SchemaAPI'
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://schemaapi.vercel.app' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'SchemaAPI'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Practical and useful solution for generating rrealistic test data.'}
        />
        <link rel="icon" href="public/favicon.ico" type="image/x-icon"/>
      </>
    )
  },
  banner: {
    key: 'contribute',
    text: (
      <a href="https://github.com/telloauguato/schemaapi" target="_blank">
        🖋 Entre e contribua com as comunidade →
      </a>
    )
  },
  navigation: {
    prev: true,
    next: true
  },
  faviconGlyph: 'public/favicon.ico'
}

export default config