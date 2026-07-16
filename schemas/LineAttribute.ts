import { z } from "zod";

/**A custom name/value attribute on a line item (e.g. personalization).*/
export const LineAttribute = z
  .object({
    key: z.string(),
    value: z.union([z.string(), z.null()]).optional(),
  })
  .strict()
  .describe(
    "A custom name/value attribute on a line item (e.g. personalization).",
  );
export type LineAttribute = z.infer<typeof LineAttribute>;
