import { z } from "zod";
declare const _DesignerReinitializeEvent: z.ZodObject<{
    type: z.ZodLiteral<"reinitialize">;
    payload: z.ZodObject<{
        design: z.ZodRecord<z.ZodString, z.ZodAny>;
        config: z.ZodUnion<readonly [import("./DesignerConfig.js").DesignerConfigSchema, z.ZodString]>;
        product: z.ZodUnion<readonly [import("./Product.js").ProductSchema, z.ZodString]>;
        pricing: z.ZodUnion<readonly [import("./DesignerPricing.js").DesignerPricingSchema, z.ZodString]>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        workspaceOptions: z.ZodOptional<z.ZodArray<import("./WorkspaceOption.js").WorkspaceOptionSchema>>;
        workspaceSessionTags: z.ZodOptional<z.ZodArray<import("./WorkspaceTag.js").WorkspaceTagSchema>>;
        designCartItem: z.ZodOptional<z.ZodObject<{
            quantity: z.ZodNumber;
        }, z.core.$loose>>;
    }, z.core.$loose>;
}, z.core.$strict>;
type _DesignerReinitializeEventSchema = typeof _DesignerReinitializeEvent;
export interface DesignerReinitializeEventSchema extends _DesignerReinitializeEventSchema {
}
/**Event emitted when the designer should reinitialize with the payload data*/
export declare const DesignerReinitializeEvent: DesignerReinitializeEventSchema;
export type DesignerReinitializeEvent = z.infer<typeof DesignerReinitializeEvent>;
export {};
//# sourceMappingURL=DesignerReinitializeEvent.d.ts.map