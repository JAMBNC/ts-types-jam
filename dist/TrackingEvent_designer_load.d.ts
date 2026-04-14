import { z } from "zod";
export declare const TrackingEvent_designer_load: z.ZodObject<{
    event: z.ZodLiteral<"designer_load">;
    payload: z.ZodObject<{
        loadTime: z.ZodNumber;
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type TrackingEvent_designer_load = z.infer<typeof TrackingEvent_designer_load>;
//# sourceMappingURL=TrackingEvent_designer_load.d.ts.map