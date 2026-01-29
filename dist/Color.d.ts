import { z } from "zod";
export declare const Color: z.ZodObject<{
    name: z.ZodString;
    representations: z.ZodRecord<z.core.$ZodRecordKey, z.core.SomeType>;
    uuid: z.ZodString;
}, z.core.$strip>;
export type Color = z.infer<typeof Color>;
//# sourceMappingURL=Color.d.ts.map