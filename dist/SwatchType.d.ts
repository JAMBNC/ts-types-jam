import { z } from "zod";
declare const _SwatchType: z.ZodEnum<{
    TEXT: "TEXT";
    IMAGE: "IMAGE";
    RGB: "RGB";
}>;
type _SwatchTypeSchema = typeof _SwatchType;
export interface SwatchTypeSchema extends _SwatchTypeSchema {
}
export declare const SwatchType: SwatchTypeSchema;
export type SwatchType = z.infer<typeof SwatchType>;
export {};
//# sourceMappingURL=SwatchType.d.ts.map