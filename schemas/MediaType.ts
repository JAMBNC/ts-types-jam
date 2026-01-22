import { z } from "zod/v4";

export const MediaType = z.enum(["image", "video"]);
export type MediaType = z.infer<typeof MediaType>;
