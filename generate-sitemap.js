const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');
const globby = require('globby');

(async () => {
  // Define the base URL of your site
  const baseUrl = 'http://fpstech.sisproj.com';
  //const baseUrl = 'http://localhost:3000';

  // Get all the paths from your pages directory
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/api',
  ]);

  const sitemap = new SitemapStream({ hostname: baseUrl });
  const writeStream = createWriteStream(resolve(__dirname, '../public/sitemap.xml'));

  sitemap.pipe(writeStream);

  pages.forEach(page => {
    const path = page.replace('pages', '').replace('.js', '').replace(/\/index$/, '');
    const route = path === '/index' ? '/' : path;
    sitemap.write({ url: route, changefreq: 'daily', priority: 0.7 });
  });

  sitemap.end();

  streamToPromise(writeStream).then(() => console.log('Sitemap successfully created!'));
})();