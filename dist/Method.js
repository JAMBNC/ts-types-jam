import { z } from "zod";
const _Method = z.enum(["CASH", "PO", "CREDIT_CARD", "ON_ACCOUNT"]);
export const Method = _Method;
