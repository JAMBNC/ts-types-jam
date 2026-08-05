import { z } from "zod";
const _Context = z.enum(["product_detail", "product_listing"]);
export const Context = _Context;
