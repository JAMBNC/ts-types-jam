import { z } from "zod";
/**Event emitted when the user requests a login.*/
export declare const DesignerLoginEvent: z.ZodObject<{
    type: z.ZodLiteral<"login">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type DesignerLoginEvent = z.infer<typeof DesignerLoginEvent>;
//# sourceMappingURL=DesignerLoginEvent.d.ts.map