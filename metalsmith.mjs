import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import Metalsmith from 'metalsmith'
import collections from '@metalsmith/collections'
import layouts from '@metalsmith/layouts'
import markdown from '@metalsmith/markdown'
import permalinks from '@metalsmith/permalinks'

const __dirname = dirname(fileURLToPath(import.meta.url))
const t1 = performance.now()

Metalsmith(__dirname)         // parent directory of this file
  .source('./docs')            // source directory
  .destination('./build')     // destination directory
  .clean(true)                // clean destination before
  .env({                      // pass NODE_ENV & other environment variables
    DEBUG: process.env.DEBUG,
    NODE_ENV: process.env.NODE_ENV
  })
  .metadata({                 // add any variable you want & use them in layout-files
    sitename: "My Static Site & Blog",
    siteurl: "https://example.com/",
    description: "It's about saying »Hello« to the world.",
    generatorname: "Metalsmith",
    generatorurl: "https://metalsmith.io/"
  })
  .use(collections({          // group all blog posts by internally
    posts: 'posts/*.md'       // adding key 'collections':'posts'
  }))                         // use `collections.posts` in layouts
  .use(markdown())            // transpile all md into html
  .use(permalinks({           // change URLs to permalink URLs
    relative: false           // put css only in /css
  }))
  .use(layouts())             // wrap layouts around html
  .build((err) => {           // build process
    if (err) throw err        // error handling is required
    console.log(`Build success in ${((performance.now() - t1) / 1000).toFixed(1)}s`)
  });