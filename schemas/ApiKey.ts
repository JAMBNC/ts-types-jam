import { z } from "zod";

/**API key authentication, typically sent as a header or query parameter.*/
export const ApiKey = z
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
  );
export type ApiKey = z.infer<typeof ApiKey>;
