import { z } from "zod/v4";
export const Context = z.enum(["product_detail", "product_listing"]);
