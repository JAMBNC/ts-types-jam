import { z } from "zod";
import { AnalyzedProduct } from "./AnalyzedProduct.js";
import { ApiInformation } from "./ApiInformation.js";
import { DesignComment } from "./DesignComment.js";
import { PurchasedAnalysis } from "./PurchasedAnalysis.js";
import { VendorPdf } from "./VendorPdf.js";
import { VerificationStatus } from "./VerificationStatus.js";
import { View } from "./View.js";
export const DesignAnalysis = z
    .object({
    config_id: z.string(),
    product: AnalyzedProduct,
    purchased: PurchasedAnalysis,
    api: ApiInformation,
    pdf: z.array(VendorPdf),
    comments: z.array(DesignComment),
    verification: VerificationStatus,
    view: View,
})
    .passthrough();
