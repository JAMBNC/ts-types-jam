import { z } from "zod";
declare const _DesignerLogoClickEvent: z.ZodObject<{
    type: z.ZodLiteral<"logoClick">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
type _DesignerLogoClickEventSchema = typeof _DesignerLogoClickEvent;
export interface DesignerLogoClickEventSchema extends _DesignerLogoClickEventSchema {
}
/**Event emitted when the user clicks the logo.*/
export declare const DesignerLogoClickEvent: DesignerLogoClickEventSchema;
export type DesignerLogoClickEvent = z.infer<typeof DesignerLogoClickEvent>;
export {};
//# sourceMappingURL=DesignerLogoClickEvent.d.ts.map