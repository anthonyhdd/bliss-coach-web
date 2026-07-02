import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(165),
    app: z.enum(['sofia', 'alex', 'charm', 'amelie', 'mila', 'astra']),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    keywords: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const pseo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pseo' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(165),
    app: z.enum(['sofia', 'alex', 'charm', 'amelie', 'mila', 'astra']),
    subject: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    keywords: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, pseo };
