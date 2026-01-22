import { z } from "zod/v4";

export const ReviewSource = z.literal("email");
export type ReviewSource = z.infer<typeof ReviewSource>;
