import { z } from "zod";
declare const _DesignState: z.ZodObject<{
    expansion: z.ZodOptional<z.ZodObject<{
        canRedo: z.ZodOptional<z.ZodBoolean>;
        canUndo: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$loose>>;
    orientation: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
    height: import("./Dimension.js").DimensionSchema;
    ingredients: z.ZodRecord<z.ZodString, import("./Ingredient.js").IngredientSchema>;
    materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
        code: z.ZodOptional<import("./MaterialCode.js").MaterialCodeSchema>;
    }, z.core.$strict>>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    textures: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [import("./TextureColor.js").TextureColorSchema, import("./TextureImage.js").TextureImageSchema]>>>;
    pages: z.ZodRecord<z.ZodString, import("./Page.js").PageSchema>;
    pagesOrdered: z.ZodArray<z.ZodString>;
    version: z.ZodString;
    width: import("./Dimension.js").DimensionSchema;
}, z.core.$strict>;
type _DesignStateSchema = typeof _DesignState;
export interface DesignStateSchema extends _DesignStateSchema {
}
/**The complete design state containing dimensions, pages, and ingredients.*/
export declare const DesignState: DesignStateSchema;
export type DesignState = z.infer<typeof DesignState>;
export {};
//# sourceMappingURL=DesignState.d.ts.map