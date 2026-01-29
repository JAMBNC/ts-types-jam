import { z } from "zod";

export const Status = z.literal("CREATED");
export type Status = z.infer<typeof Status>;
