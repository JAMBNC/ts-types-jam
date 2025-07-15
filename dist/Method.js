import { z } from "zod/v4";
export const Method = z.enum(["CASH", "PO", "CREDIT_CARD", "ON_ACCOUNT"]);
