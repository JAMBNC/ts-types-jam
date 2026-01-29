import { z } from "zod";

export const ReviewSource = z.literal("email");
export type ReviewSource = z.infer<typeof ReviewSource>;
