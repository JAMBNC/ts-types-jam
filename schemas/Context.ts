import { z } from "zod";

const _Context = z.enum(["product_detail", "product_listing"]);
type _ContextSchema = typeof _Context;
export interface ContextSchema extends _ContextSchema {}
export const Context: ContextSchema = _Context;
export type Context = z.infer<typeof Context>;
