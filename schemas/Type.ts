import { z } from "zod";

export const Type = z.literal("Tag");
export type Type = z.infer<typeof Type>;
