import { z } from "zod";
declare const _DesignerReinitializeRequestEvent: z.ZodObject<{
    type: z.ZodLiteral<"reinitializeRequest">;
    payload: z.ZodObject<{
        sku: z.ZodOptional<z.ZodString>;
        designUuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerReinitializeRequestEventSchema = typeof _DesignerReinitializeRequestEvent;
export interface DesignerReinitializeRequestEventSchema extends _DesignerReinitializeRequestEventSchema {
}
/**Event emitted when the designer requests a reinitialize*/
export declare const DesignerReinitializeRequestEvent: DesignerReinitializeRequestEventSchema;
export type DesignerReinitializeRequestEvent = z.infer<typeof DesignerReinitializeRequestEvent>;
export {};
//# sourceMappingURL=DesignerReinitializeRequestEvent.d.ts.map