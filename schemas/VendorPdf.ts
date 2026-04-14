import { z } from "zod";
import { PdfSide } from "./PdfSide.js";
import { PdfVerification } from "./PdfVerification.js";

export const VendorPdf = z
  .object({
    identifier: z.string(),
    url: z.string(),
    cmyk: z.boolean(),
    pms: z.number(),
    white: z.boolean(),
    black: z.boolean(),
    miscPlates: z.array(z.any()),
    spotcolorPlates: z.array(z.string()),
    foils: z.array(z.any()),
    side1: PdfSide,
    side2: PdfSide,
    verification: PdfVerification,
  })
  .passthrough();
export type VendorPdf = z.infer<typeof VendorPdf>;
