import { z } from "zod";
export declare const SwatchType: z.ZodEnum<{
    IMAGE: "IMAGE";
    RGB: "RGB";
    TEXT: "TEXT";
}>;
export type SwatchType = z.infer<typeof SwatchType>;
//# sourceMappingURL=SwatchType.d.ts.map