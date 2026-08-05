import { z } from "zod";
declare const _DesignerCartEvent: z.ZodObject<{
    type: z.ZodLiteral<"cart">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
type _DesignerCartEventSchema = typeof _DesignerCartEvent;
export interface DesignerCartEventSchema extends _DesignerCartEventSchema {
}
/**Event emitted when the user requests redirection to cart*/
export declare const DesignerCartEvent: DesignerCartEventSchema;
export type DesignerCartEvent = z.infer<typeof DesignerCartEvent>;
export {};
//# sourceMappingURL=DesignerCartEvent.d.ts.map