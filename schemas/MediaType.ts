import { z } from "zod";

export const MediaType = z.enum(["image", "video"]);
export type MediaType = z.infer<typeof MediaType>;
