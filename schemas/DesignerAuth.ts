import { z } from "zod";

export const DesignerAuth = z.object({
  /**API key authentication, typically sent as a header or query parameter.*/
  chiliAuth: z
    .object({
      type: z.literal("apiKey"),
      /**The API key value.*/
      key: z.string().describe("The API key value."),
      /**The header name to use for the API key.*/
      headerName: z
        .string()
        .describe("The header name to use for the API key.")
        .default("X-API-Key"),
      /**Where to send the API key.*/
      in: z
        .enum(["header", "query"])
        .describe("Where to send the API key.")
        .default("header"),
    })
    .strict()
    .describe(
      "API key authentication, typically sent as a header or query parameter.",
    ),
  /**Schema definitions for various authentication methods used around the ecosystem*/
  endpointAuth: z
    .any()
    .describe(
      "Schema definitions for various authentication methods used around the ecosystem",
    )
    .optional(),
});
export type DesignerAuth = z.infer<typeof DesignerAuth>;
