import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		publishedAt: z.coerce.date(),
	}),
});

export const collections = { blog };
