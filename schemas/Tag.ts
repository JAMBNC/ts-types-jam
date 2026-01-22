import { z } from "zod/v4";

export const Tag = z.enum([
  "primary",
  "small",
  "thumbnail",
  "yourLogoHere",
  "insideView",
  "swatch",
  "amazon",
  "carousel",
  "other",
]);
export type Tag = z.infer<typeof Tag>;
