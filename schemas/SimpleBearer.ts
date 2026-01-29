import { z } from "zod";

/**A bearer token that is sent in the Authorization header.*/
export const SimpleBearer = z
  .object({
    type: z.literal("bearer"),
    /**The bearer token value.*/
    token: z.string().describe("The bearer token value."),
  })
  .strict()
  .describe("A bearer token that is sent in the Authorization header.");
export type SimpleBearer = z.infer<typeof SimpleBearer>;
