import { z } from "zod";
/**Event emitted when the user clicks the logo.*/
export declare const LogoClickEvent: z.ZodObject<{
    type: z.ZodLiteral<"logoClick">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type LogoClickEvent = z.infer<typeof LogoClickEvent>;
//# sourceMappingURL=LogoClickEvent.d.ts.map