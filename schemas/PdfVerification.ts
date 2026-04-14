import { z } from "zod";
import { ApiVerification } from "./ApiVerification.js";
import { PrintVerification } from "./PrintVerification.js";

export const PdfVerification = z
  .object({
    messages: z.array(z.string()),
    exists: z.object({ status: z.string() }).passthrough(),
    "product-support": PrintVerification,
    purchase: PrintVerification,
    api: ApiVerification,
  })
  .passthrough();
export type PdfVerification = z.infer<typeof PdfVerification>;
