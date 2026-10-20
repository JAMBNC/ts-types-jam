import { z } from "zod";
const _DesignerProductChangeEvent = z
    .object({
    type: z.literal("productChange"),
    payload: z
        .object({
        /**The channel SKU now loaded, the one the host sells.*/
        sku: z
            .string()
            .describe("The channel SKU now loaded, the one the host sells."),
    })
        .strict(),
})
    .strict()
    .describe("Event emitted after the designer switched the loaded product on its own (a starter sold as a different product), so the host can follow: the sellable variant, the page URL and any save state keyed by the old product.");
/**Event emitted after the designer switched the loaded product on its own (a starter sold as a different product), so the host can follow: the sellable variant, the page URL and any save state keyed by the old product.*/
export const DesignerProductChangeEvent = _DesignerProductChangeEvent;
