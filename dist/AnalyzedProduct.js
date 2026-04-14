import { z } from "zod";
import { AnalyzedProof } from "./AnalyzedProof.js";
import { AnalyzedVendor } from "./AnalyzedVendor.js";
export const AnalyzedProduct = z
    .object({
    sku: z.string(),
    name: z.string(),
    proofs: z.array(AnalyzedProof),
    vendors: z.array(AnalyzedVendor),
})
    .passthrough();
