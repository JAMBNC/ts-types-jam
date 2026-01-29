import { z } from "zod";
export declare const Color: z.ZodObject<{
    uuid: z.ZodString;
    name: z.ZodString;
    representations: z.ZodRecord<z.core.$ZodRecordKey, z.core.SomeType>;
}, z.core.$strict>;
export type Color = z.infer<typeof Color>;
//# sourceMappingURL=Color.d.ts.map