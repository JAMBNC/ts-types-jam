import { z } from "zod";
declare const _BaseIngredient: z.ZodObject<{
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
}, z.core.$loose>;
type _BaseIngredientSchema = typeof _BaseIngredient;
export interface BaseIngredientSchema extends _BaseIngredientSchema {
}
/**Fields shared by every drawable ingredient type, composed into each via allOf. A base (template) design also uses these; a coating is the one ingredient that does not, and stays standalone.*/
export declare const BaseIngredient: BaseIngredientSchema;
export type BaseIngredient = z.infer<typeof BaseIngredient>;
export {};
//# sourceMappingURL=BaseIngredient.d.ts.map