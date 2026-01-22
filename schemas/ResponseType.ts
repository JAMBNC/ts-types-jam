import { z } from "zod/v4";

export const ResponseType = z.literal("merchantResponse");
export type ResponseType = z.infer<typeof ResponseType>;
