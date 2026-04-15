import { z } from "zod";
export declare const DesignerAddImageTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_image">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type DesignerAddImageTrackingEvent = z.infer<typeof DesignerAddImageTrackingEvent>;
//# sourceMappingURL=DesignerAddImageTrackingEvent.d.ts.map