import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const optionalDate = z.preprocess(
  (value) => (value === '' || value === null ? undefined : value),
  z.coerce.date().optional(),
);

const articleSchema = z.object({
  title: z.string(),
  seoTitle: z.string().optional(),
  description: z.string().max(180),
  publishDate: z.coerce.date(),
  updatedDate: optionalDate,
  author: z.string().default('ExtraBrain'),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  ogImage: z.string().optional(),
  ogImageAlt: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: articleSchema,
});

const interviewQuestions = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/interview-questions' }),
  schema: articleSchema.extend({
    seoTags: z.array(z.string()).default([]),
    sourceUrl: z.string().optional(),
    canonicalUrl: z.string().optional(),
    importedAt: optionalDate,
  }),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
  blog,
  interviewQuestions,
};
