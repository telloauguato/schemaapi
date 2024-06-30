import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import pkg from "./package.json";

const config: DocsThemeConfig = {
  logo: <span>≝ SchemaAPI</span>,
  project: {
    link: "https://github.com/telloauguato/schemaapi",
  },
  docsRepositoryBase: "https://github.com/telloauguato/schemaapi",
  footer: {
    text: `≝ SchemaAPI Docs — ${pkg.version} | Telo`,
  },
  faviconGlyph: "≝",
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "pt-BR", text: "Portuguese" },
  ],
};

export default config;
