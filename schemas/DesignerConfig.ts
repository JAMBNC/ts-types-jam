import { z } from "zod";
import { AdderCodeEnum } from "./AdderCodeEnum.js";
import { ContentPlacement } from "./ContentPlacement.js";
import { InitialOnLoad } from "./InitialOnLoad.js";

export const DesignerConfig = z
  .object({
    adders: z.record(z.string(), z.string()).superRefine((value, ctx) => {
      for (const key in value) {
        const result = AdderCodeEnum.safeParse(key);
        if (!result.success) {
          ctx.addIssue({
            path: [...ctx.path, key],
            code: "custom",
            message: `Invalid property name: ${key}`,
            params: {
              issues: result.error.issues,
            },
          });
        }
      }
    }),
    default_content_placement: z
      .record(z.string(), ContentPlacement)
      .optional(),
    features: z.any(),
    initial_on_load: InitialOnLoad.optional(),
    product_category: z.string(),
    vendors: z.record(z.string(), z.array(AdderCodeEnum)),
  })
  .passthrough();
export type DesignerConfig = z.infer<typeof DesignerConfig>;
