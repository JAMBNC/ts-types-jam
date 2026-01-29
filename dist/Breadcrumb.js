import { z } from "zod";
export const Breadcrumb = z.object({
    label: z.string(),
    url: z.string().optional(),
});
