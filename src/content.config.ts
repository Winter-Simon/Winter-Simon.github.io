import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    topic: z.string(),
    updated: z.coerce.date(),
    stage: z.enum(['探索中', '整理中', '相对成熟']),
    order: z.number().default(99),
  }),
});

export const collections = { notes };
