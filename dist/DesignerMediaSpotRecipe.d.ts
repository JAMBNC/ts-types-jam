import { z } from "zod";
declare const _DesignerMediaSpotRecipe: z.ZodObject<{
    inks: z.ZodArray<import("./Color.js").ColorSchema>;
    mappings: z.ZodArray<import("./DesignerImageInkMapping.js").DesignerImageInkMappingSchema>;
    keepBackground: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
type _DesignerMediaSpotRecipeSchema = typeof _DesignerMediaSpotRecipe;
export interface DesignerMediaSpotRecipeSchema extends _DesignerMediaSpotRecipeSchema {
}
/**Everything the server needs to separate a raster into spot inks: the inks, the colour clusters fusion matched to them, and whether the customer kept the white background.*/
export declare const DesignerMediaSpotRecipe: DesignerMediaSpotRecipeSchema;
export type DesignerMediaSpotRecipe = z.infer<typeof DesignerMediaSpotRecipe>;
export {};
//# sourceMappingURL=DesignerMediaSpotRecipe.d.ts.map