function sitemap() {
  const siteUrl = "https://atidele.dev";
  const lastModified = new Date();

  return [
    {
      siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

module.exports = sitemap;
