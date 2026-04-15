import { z } from "zod";
/**Event emitted when the user clicks the logo.*/
export declare const DesignerLogoClickEvent: z.ZodObject<{
    type: z.ZodLiteral<"logoClick">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type DesignerLogoClickEvent = z.infer<typeof DesignerLogoClickEvent>;
//# sourceMappingURL=DesignerLogoClickEvent.d.ts.map