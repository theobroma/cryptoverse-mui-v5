import * as z from 'zod';

const LinksSchema = z.object({
  name: z.string(),
  type: z.string(),
  url: z.string().url(),
});

export type LinksType = z.infer<typeof LinksSchema>;
