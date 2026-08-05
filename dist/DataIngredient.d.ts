import { z } from "zod";
declare const _DataIngredient: z.ZodObject<{
    type: z.ZodLiteral<"data">;
    data: z.ZodObject<{
        height: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
        layerName: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        tag: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
        x: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
        y: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
        additionalProperties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$loose>;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    opacity: z.ZodNumber;
    rotation: z.ZodNumber;
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    viewLayer: z.ZodOptional<import("./ViewLayer.js").ViewLayerSchema>;
    zIndex: z.ZodNumber;
}, z.core.$strict>;
type _DataIngredientSchema = typeof _DataIngredient;
export interface DataIngredientSchema extends _DataIngredientSchema {
}
/**An ingredient that holds a generic data payload such as textures or backgrounds.*/
export declare const DataIngredient: DataIngredientSchema;
export type DataIngredient = z.infer<typeof DataIngredient>;
export {};
//# sourceMappingURL=DataIngredient.d.ts.map