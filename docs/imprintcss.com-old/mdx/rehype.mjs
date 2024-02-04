import { mdxAnnotations } from 'mdx-annotations'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const rehypePlugins = [
  mdxAnnotations.rehype,
  rehypeSlug,
  [ rehypeAutolinkHeadings, {behavior: 'append'}, ],
]
