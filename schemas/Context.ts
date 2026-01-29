import { z } from "zod";

export const Context = z.enum(["product_detail", "product_listing"]);
export type Context = z.infer<typeof Context>;
