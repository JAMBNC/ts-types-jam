import { z } from "zod/v4";
export declare const Color: z.ZodObject<{
    uuid: z.ZodString;
    name: z.ZodString;
    representations: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodNumber>>;
}, z.core.$strict>;
export type Color = z.infer<typeof Color>;
//# sourceMappingURL=Color.d.ts.map