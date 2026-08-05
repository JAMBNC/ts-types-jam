import { z } from "zod";

const _SimpleBearer = z
  .object({
    type: z.literal("bearer"),
    /**The bearer token value.*/
    token: z.string().describe("The bearer token value."),
  })
  .strict()
  .describe("A bearer token that is sent in the Authorization header.");
type _SimpleBearerSchema = typeof _SimpleBearer;
export interface SimpleBearerSchema extends _SimpleBearerSchema {}
/**A bearer token that is sent in the Authorization header.*/
export const SimpleBearer: SimpleBearerSchema = _SimpleBearer;
export type SimpleBearer = z.infer<typeof SimpleBearer>;
