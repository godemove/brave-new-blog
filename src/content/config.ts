import { defineCollection, z } from 'astro:content'
import { SITE } from '@config'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  type: 'content_layer',
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
  }),
  schema: z.object({
    title: z.string().default(SITE.title),
    description: z.string(),
    slug: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default(['Other']),
  }),
})

export const collections = { blog }
