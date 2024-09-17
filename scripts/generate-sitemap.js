const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');


const generateSitemap = async () => {

  ///Get all cms page list start here
  // let allPageList = await fetch('https://shopfpsonline.com/page-list');
  //     pageList = await allPageList.json();
  //     //console.log("Page list", pageList); return;

  //  // Generate an index sitemap
  //  const indexLinkscms = pageList.map(page => ({
  //   //url: `/sitemap-${product._id}.xml`,
  //   url: `https://shopfpsonline.com/${page.page_url}`,
  //   changefreq: 'daily',
  //   priority: 1.0,
  // }));

  // const indexStreamcms = new SitemapStream({ hostname: 'https://shopfpsonline.com' });
  // const indexSitemapcms = await streamToPromise(Readable.from(indexLinkscms).pipe(indexStreamcms)).then(data => data.toString());
  // fs.writeFileSync(path.join(__dirname, '../public/page-sitemap.xml'), indexSitemapcms);



  
  ///Get all product list on 16.07.2024 start here
  // let products = await fetch('https://shopfpsonline.com/product-list');
  //     products = await products.json();
  // //console.log("Product List", products); 
  // // Generate a sitemap for each product
  // for (const product of products) {
  //   const links = [
  //     {
  //       //url: product.url,
  //       url: `/products?prodId=${product._id}`,
  //       changefreq: 'daily',
  //       priority: 0.8,
  //     },
  //   ];
  //   console.log("product link", links);
  //   const stream = new SitemapStream({ hostname: 'https://shopfpsonline.com' });
  //   const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());
  //   console.log("Sitemap", sitemap);
  //   const sitemapPath = path.join(__dirname, `../public/sitemap-${product._id}.xml`);
  //   fs.writeFileSync(sitemapPath, sitemap);
  // }

  // // Generate an index sitemap
  // const indexLinks = products.map(product => ({
  //   //url: `/sitemap-${product._id}.xml`,
  //   url: `/products?prodId=${product._id}`,
  //   changefreq: 'daily',
  //   priority: 1.0,
  // }));

  // const indexStream = new SitemapStream({ hostname: 'https://shopfpsonline.com' });
  // const indexSitemap = await streamToPromise(Readable.from(indexLinks).pipe(indexStream)).then(data => data.toString());
  // fs.writeFileSync(path.join(__dirname, '../public/product-sitemap.xml'), indexSitemap);






  ///Get Category product list on 16.07.2024
  let allCatList = await fetch(process.env.BACKEND_URL+'/cat-list');
      catList = await allCatList.json();
      //console.log("Page list", catList); return;

   // Generate an index sitemap
   const indexLinkscat = catList.map(page => ({
    url: `/category?catgoryname=${page.category_name}`,
    changefreq: 'daily',
    priority: 1.0,
  }));

  const indexStreamcat = new SitemapStream({ hostname: 'https://fpstech.sisproj.com' });
  const indexSitemapcat = await streamToPromise(Readable.from(indexLinkscat).pipe(indexStreamcat)).then(data => data.toString());
  fs.writeFileSync(path.join(__dirname, '../public/product_cat-sitemap.xml'), indexSitemapcat);




  console.log('Sitemaps generated successfully!');


};

generateSitemap().catch(console.error);




// ////Another steps for creating sitemap.
// const { SitemapStream, streamToPromise } = require('sitemap');
// const { Readable } = require('stream');
// const fs = require('fs');
// const path = require('path');

// const generateSitemap = async () => {
//     let products = await fetch('https://fpstech.siswork.com:3001/product-list');
//         products = await products.json();
//         //console.log("Product List", products); 


//     const hostname = 'https://fpstech.sisproj.com';
//     const sitemapsDir = path.resolve('./public/sitemaps');
    
//     // Ensure the sitemaps directory exists
//     if (!fs.existsSync(sitemapsDir)){
//         fs.mkdirSync(sitemapsDir);
//     }

//     const sitemaps = [];

//     for (const product of products) {
//         const sitemap = new SitemapStream({ hostname });
//         sitemap.write({ url: `/products?prodId=${product._id}`, changefreq: 'daily', priority: 0.9 });
//         sitemap.end();

//         const sitemapOutput = await streamToPromise(Readable.from(sitemap));
//         const filePath = path.join(sitemapsDir, `sitemap-product-${product._id}.xml`);
//         fs.writeFileSync(filePath, sitemapOutput.toString());
//         sitemaps.push(`${hostname}/sitemaps/sitemap-product-${product._id}.xml`);
//     }

//     //res.writeHead(200, { 'Content-Type': 'application/json' });
//     //res.end(JSON.stringify({ success: true }));
//     console.log("Sitemap generated successfully");
// };

//generateSitemap().catch(console.error);



//Generate sitemax for index file
// const generateSitemapIndex = () => {
//     const hostname = 'https://fpstech.sisproj.com';
//     const sitemapsDir = path.resolve(__dirname, '../public/sitemaps');
//     const sitemapIndex = [];

//     fs.readdirSync(sitemapsDir).forEach(file => {
//         if (file.endsWith('.xml')) {
//             sitemapIndex.push(`<sitemap><loc>${hostname}/sitemaps/${file}</loc></sitemap>`);
//         }
//     });

//     const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
//     <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//         ${sitemapIndex.join('')}
//     </sitemapindex>`;

//     fs.writeFileSync(path.resolve(__dirname, '../public/sitemap-index.xml'), sitemapIndexContent);
//     console.log("Sitemap index generated successfully");
// };

// generateSitemapIndex();





////Add product to link for multiple sitemap 11.07.2024

// const { SitemapStream, streamToPromise } = require('sitemap');
// const { createGzip } = require('zlib');
// const fs = require('fs');
// const path = require('path');

// const generateSitemap = (urls, filename) => {
//   const smStream = new SitemapStream({ hostname: 'http://localhost:3000' });
//   const pipeline = smStream.pipe(createGzip());
//   urls.forEach(url => smStream.write(url));
//   smStream.end();

//   streamToPromise(pipeline).then(data => {
//     fs.writeFileSync(path.join(__dirname, `../public/${filename}.xml.gz`), data);
//   });

//   console.log("Sitemap index generated successfully");

// };

// // Example URLs for each sitemap
// const productUrls = [
//   { url: '/products/1', changefreq: 'daily', priority: 0.9 },
//   { url: '/products/2', changefreq: 'daily', priority: 0.9 },
//   // Add more product URLs here
// ];

// const categoryUrls = [
//   { url: '/category/1', changefreq: 'weekly', priority: 0.8 },
//   { url: '/category/2', changefreq: 'weekly', priority: 0.8 },
//   // Add more category URLs here
// ];

// // Generate the sitemaps
// generateSitemap(productUrls, 'sitemap-products');
// generateSitemap(categoryUrls, 'sitemap-categories');


