import { z } from "zod";
import { Color } from "./Color.js";
import { DesignerImageInkMapping } from "./DesignerImageInkMapping.js";

const _DesignerMediaSpotRecipe = z
  .object({
    /**The distinct palette inks the image prints in.*/
    inks: z
      .array(Color)
      .min(1)
      .describe("The distinct palette inks the image prints in."),
    /**One per colour cluster fusion found, each matched to a palette ink.*/
    mappings: z
      .array(DesignerImageInkMapping)
      .min(1)
      .describe(
        "One per colour cluster fusion found, each matched to a palette ink.",
      ),
    /**Keep the white background fusion would otherwise remove: the white touching the image border. Absent means it is removed.*/
    keepBackground: z
      .boolean()
      .describe(
        "Keep the white background fusion would otherwise remove: the white touching the image border. Absent means it is removed.",
      )
      .optional(),
  })
  .strict()
  .describe(
    "Everything the server needs to separate a raster into spot inks: the inks, the colour clusters fusion matched to them, and whether the customer kept the white background.",
  );
type _DesignerMediaSpotRecipeSchema = typeof _DesignerMediaSpotRecipe;
export interface DesignerMediaSpotRecipeSchema extends _DesignerMediaSpotRecipeSchema {}
/**Everything the server needs to separate a raster into spot inks: the inks, the colour clusters fusion matched to them, and whether the customer kept the white background.*/
export const DesignerMediaSpotRecipe: DesignerMediaSpotRecipeSchema =
  _DesignerMediaSpotRecipe;
export type DesignerMediaSpotRecipe = z.infer<typeof DesignerMediaSpotRecipe>;
