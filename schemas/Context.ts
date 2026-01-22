import { z } from "zod/v4";

export const Context = z.enum(["product_detail", "product_listing"]);
export type Context = z.infer<typeof Context>;
