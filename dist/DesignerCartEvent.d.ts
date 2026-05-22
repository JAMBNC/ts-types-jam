import { z } from "zod";
/**Event emitted when the user requests redirection to cart*/
export declare const DesignerCartEvent: z.ZodObject<{
    type: z.ZodLiteral<"cart">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type DesignerCartEvent = z.infer<typeof DesignerCartEvent>;
//# sourceMappingURL=DesignerCartEvent.d.ts.map