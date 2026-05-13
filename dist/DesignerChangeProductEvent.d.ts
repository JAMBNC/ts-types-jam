import { z } from "zod";
/**Event emitted when the designer requests a product change*/
export declare const DesignerChangeProductEvent: z.ZodObject<{
    type: z.ZodLiteral<"changeProduct">;
    payload: z.ZodObject<{
        sku: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerChangeProductEvent = z.infer<typeof DesignerChangeProductEvent>;
//# sourceMappingURL=DesignerChangeProductEvent.d.ts.map