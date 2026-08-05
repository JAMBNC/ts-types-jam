import { z } from "zod";
declare const _LineIngredient: z.ZodObject<{
    type: z.ZodLiteral<"line">;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    opacity: z.ZodNumber;
    rect: import("./Rect.js").RectSchema;
    rotation: z.ZodNumber;
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    viewLayer: z.ZodOptional<import("./ViewLayer.js").ViewLayerSchema>;
    zIndex: z.ZodNumber;
}, z.core.$strict>;
type _LineIngredientSchema = typeof _LineIngredient;
export interface LineIngredientSchema extends _LineIngredientSchema {
}
/**A line ingredient*/
export declare const LineIngredient: LineIngredientSchema;
export type LineIngredient = z.infer<typeof LineIngredient>;
export {};
//# sourceMappingURL=LineIngredient.d.ts.map