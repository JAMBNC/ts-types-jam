import { z } from "zod/v4";
export declare const SwatchType: z.ZodEnum<{
    TEXT: "TEXT";
    IMAGE: "IMAGE";
    RGB: "RGB";
}>;
export type SwatchType = z.infer<typeof SwatchType>;
//# sourceMappingURL=SwatchType.d.ts.map