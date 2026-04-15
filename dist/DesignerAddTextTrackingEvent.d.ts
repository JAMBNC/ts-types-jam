import { z } from "zod";
export declare const DesignerAddTextTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_text">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type DesignerAddTextTrackingEvent = z.infer<typeof DesignerAddTextTrackingEvent>;
//# sourceMappingURL=DesignerAddTextTrackingEvent.d.ts.map