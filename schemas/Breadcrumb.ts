import { z } from "zod/v4";

export const Breadcrumb = z.object({
  label: z.string(),
  url: z.string().optional(),
});
export type Breadcrumb = z.infer<typeof Breadcrumb>;
