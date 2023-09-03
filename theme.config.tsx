import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Manual McD</span>,
  project: {
    link: 'https://github.com/telloauguato/manualmcd',
  },
  docsRepositoryBase: 'https://github.com/telloauguato/manualmcd',
  footer: {
    text: `Manual McD ${new Date().getFullYear()} — by @telloauguato`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Manual McD'
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://manualmcd.vercel.app' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Manual McD'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Manual Online McD'}
        />
      </>
    )
  },
  banner: {
    key: 'contribute',
    text: (
      <a href="https://github.com/telloauguato/manualmcd" target="_blank">
        🖋 Entre e contribua com as comunidade →
      </a>
    )
  },
  navigation: {
    prev: true,
    next: true
  },
  faviconGlyph: '🍔'
}

export default config