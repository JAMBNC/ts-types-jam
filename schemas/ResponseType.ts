import { z } from "zod";

export const ResponseType = z.literal("merchantResponse");
export type ResponseType = z.infer<typeof ResponseType>;
