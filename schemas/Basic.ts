import { z } from "zod";

const _Basic = z
  .object({
    type: z.literal("basic"),
    /**The username for authentication.*/
    username: z.string().describe("The username for authentication."),
    /**The password for authentication.*/
    password: z.string().describe("The password for authentication."),
  })
  .strict()
  .describe("Basic authentication using a username and password.");
type _BasicSchema = typeof _Basic;
export interface BasicSchema extends _BasicSchema {}
/**Basic authentication using a username and password.*/
export const Basic: BasicSchema = _Basic;
export type Basic = z.infer<typeof Basic>;
