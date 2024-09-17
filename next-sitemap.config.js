module.exports = {
    siteUrl: 'https://fpstech.siswork.com', // Replace with your actual site URL
    generateRobotsTxt: true,
    sitemapSize: 5000,
    outDir: './public',
    additionalSitemaps: [
      'https://fpstech.siswork.com/sitemap-products.xml',
      'https://fpstech.siswork.com/sitemap-categories.xml',
    ],
    transform: async (config, url) => {
      return {
        loc: url, // The URL
        changefreq: 'daily',
        priority: 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    },
  };