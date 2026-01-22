import { z } from "zod/v4";

export const Type = z.literal("Tag");
export type Type = z.infer<typeof Type>;
