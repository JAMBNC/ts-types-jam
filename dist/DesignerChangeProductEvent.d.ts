import { z } from "zod";
declare const _DesignerChangeProductEvent: z.ZodObject<{
    type: z.ZodLiteral<"changeProduct">;
    payload: z.ZodObject<{
        sku: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerChangeProductEventSchema = typeof _DesignerChangeProductEvent;
export interface DesignerChangeProductEventSchema extends _DesignerChangeProductEventSchema {
}
/**Event emitted when the designer requests a product change*/
export declare const DesignerChangeProductEvent: DesignerChangeProductEventSchema;
export type DesignerChangeProductEvent = z.infer<typeof DesignerChangeProductEvent>;
export {};
//# sourceMappingURL=DesignerChangeProductEvent.d.ts.map