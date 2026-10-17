import { z } from "zod";
declare const _DesignerStarterOffer: z.ZodObject<{
    id: z.ZodNumber;
    label: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    category: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    designPreviewImage: z.ZodOptional<z.ZodString>;
    snapshots: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        label: z.ZodString;
    }, z.core.$strict>>;
    workspaceOptionUuid: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
type _DesignerStarterOfferSchema = typeof _DesignerStarterOffer;
export interface DesignerStarterOfferSchema extends _DesignerStarterOfferSchema {
}
/**One starter the designer can offer for the loaded product: a head-start design in the product's style that the shopper opens and finishes.*/
export declare const DesignerStarterOffer: DesignerStarterOfferSchema;
export type DesignerStarterOffer = z.infer<typeof DesignerStarterOffer>;
export {};
//# sourceMappingURL=DesignerStarterOffer.d.ts.map