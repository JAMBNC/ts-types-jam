import { z } from "zod";
/**Basic authentication using a username and password.*/
export const Basic = z
    .object({
    type: z.literal("basic"),
    /**The username for authentication.*/
    username: z.string().describe("The username for authentication."),
    /**The password for authentication.*/
    password: z.string().describe("The password for authentication."),
})
    .strict()
    .describe("Basic authentication using a username and password.");
