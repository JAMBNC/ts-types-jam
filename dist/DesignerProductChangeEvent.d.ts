import { z } from "zod";
declare const _DesignerProductChangeEvent: z.ZodObject<{
    type: z.ZodLiteral<"productChange">;
    payload: z.ZodObject<{
        sku: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerProductChangeEventSchema = typeof _DesignerProductChangeEvent;
export interface DesignerProductChangeEventSchema extends _DesignerProductChangeEventSchema {
}
/**Event emitted after the designer switched the loaded product on its own (a starter sold as a different product), so the host can follow: the sellable variant, the page URL and any save state keyed by the old product.*/
export declare const DesignerProductChangeEvent: DesignerProductChangeEventSchema;
export type DesignerProductChangeEvent = z.infer<typeof DesignerProductChangeEvent>;
export {};
//# sourceMappingURL=DesignerProductChangeEvent.d.ts.map