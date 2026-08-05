import { z } from "zod";

const _ReviewSource = z.literal("email");
type _ReviewSourceSchema = typeof _ReviewSource;
export interface ReviewSourceSchema extends _ReviewSourceSchema {}
export const ReviewSource: ReviewSourceSchema = _ReviewSource;
export type ReviewSource = z.infer<typeof ReviewSource>;
