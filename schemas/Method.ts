import { z } from "zod";

const _Method = z.enum(["CASH", "PO", "CREDIT_CARD", "ON_ACCOUNT"]);
type _MethodSchema = typeof _Method;
export interface MethodSchema extends _MethodSchema {}
export const Method: MethodSchema = _Method;
export type Method = z.infer<typeof Method>;
