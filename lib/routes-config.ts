// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      { title: "Changelog", href: "/changelog" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Types",
    href: "types",
    items: [
      { title: "All Types", href: "/all-types" },
      { title: "Address", href: "/address" },
      { title: "Email", href: "/email" },
      { title: "Name", href: "/name" },
      { title: "Number", href: "/number" },
      { title: "Options", href: "/options" },
      { title: "Pattern", href: "/pattern" },
      { title: "Schema", href: "/schema" },
      { title: "Username", href: "/username" },
      { title: "UUID", href: "/uuid" },
    ],
  }
]

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
