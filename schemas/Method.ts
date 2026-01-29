import { z } from "zod";

export const Method = z.enum(["CASH", "PO", "CREDIT_CARD", "ON_ACCOUNT"]);
export type Method = z.infer<typeof Method>;
