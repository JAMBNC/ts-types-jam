import { z } from "zod";
declare const _DataIngredient: z.ZodObject<{
    id: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    slot: z.ZodOptional<import("./Slot.js").SlotSchema>;
    viewLayer: z.ZodOptional<import("./ViewLayer.js").ViewLayerSchema>;
    rotation: z.ZodNumber;
    editable: z.ZodOptional<z.ZodBoolean>;
    restrictions: z.ZodOptional<import("./IngredientRestrictions.js").IngredientRestrictionsSchema>;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    opacity: z.ZodNumber;
    zIndex: z.ZodNumber;
    simulated: z.ZodOptional<z.ZodBoolean>;
    clip: z.ZodOptional<z.ZodArray<import("./ClipStep.js").ClipStepSchema>>;
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
}, z.core.$loose>;
type _DataIngredientSchema = typeof _DataIngredient;
export interface DataIngredientSchema extends _DataIngredientSchema {
}
/**An ingredient that holds a generic data payload such as textures or backgrounds.*/
export declare const DataIngredient: DataIngredientSchema;
export type DataIngredient = z.infer<typeof DataIngredient>;
export {};
//# sourceMappingURL=DataIngredient.d.ts.map