import { z } from "zod";

export const PrintVerification = z
  .object({
    messages: z.array(z.string()),
    digital: z.boolean(),
    white: z.boolean(),
    offset: z.boolean(),
    foil: z.boolean(),
    status: z.string().optional(),
  })
  .passthrough();
export type PrintVerification = z.infer<typeof PrintVerification>;
