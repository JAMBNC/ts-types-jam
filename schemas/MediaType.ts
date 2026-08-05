import { z } from "zod";

const _MediaType = z.enum(["image", "video"]);
type _MediaTypeSchema = typeof _MediaType;
export interface MediaTypeSchema extends _MediaTypeSchema {}
export const MediaType: MediaTypeSchema = _MediaType;
export type MediaType = z.infer<typeof MediaType>;
