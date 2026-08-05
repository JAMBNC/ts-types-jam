import { z } from "zod";
declare const _DesignerLoginEvent: z.ZodObject<{
    type: z.ZodLiteral<"login">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
type _DesignerLoginEventSchema = typeof _DesignerLoginEvent;
export interface DesignerLoginEventSchema extends _DesignerLoginEventSchema {
}
/**Event emitted when the user requests a login.*/
export declare const DesignerLoginEvent: DesignerLoginEventSchema;
export type DesignerLoginEvent = z.infer<typeof DesignerLoginEvent>;
export {};
//# sourceMappingURL=DesignerLoginEvent.d.ts.map