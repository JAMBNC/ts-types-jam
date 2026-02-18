import { z } from "zod";
import { ApiKey } from "./ApiKey.js";

export const PosthogInfo = z
  .object({
    userIdentity: z.any().optional(),
    apiHost: z.string().url(),
    /**API key authentication, typically sent as a header or query parameter.*/
    apiKey: ApiKey,
  })
  .passthrough();
export type PosthogInfo = z.infer<typeof PosthogInfo>;
