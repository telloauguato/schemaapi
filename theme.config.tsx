import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import pkg from "./package.json";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>🐚 SchemaAPI</span>,
  project: {
    link: "https://github.com/telloauguato/schemaapi",
  },
  docsRepositoryBase: "https://github.com/telloauguato/schemaapi",
  footer: {
    text: `🐚 SchemaAPI Docs — ${pkg.version}`,
  },
  faviconGlyph: "🐚",
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "pt-BR", text: "Português" },
  ],
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
          content={frontMatter.description || 'SchemaAPI Docs'}
        />
      </>
    )
  }
};

export default config;
