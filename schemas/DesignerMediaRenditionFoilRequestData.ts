import { z } from "zod";

const _DesignerMediaRenditionFoilRequestData = z
  .object({
    process: z.literal("foil"),
    /**Hex color code to render the foil image in*/
    color: z.string().describe("Hex color code to render the foil image in"),
  })
  .strict()
  .describe(
    "The request body data for the media rendition endpoint for foil specific requests",
  );
type _DesignerMediaRenditionFoilRequestDataSchema =
  typeof _DesignerMediaRenditionFoilRequestData;
export interface DesignerMediaRenditionFoilRequestDataSchema extends _DesignerMediaRenditionFoilRequestDataSchema {}
/**The request body data for the media rendition endpoint for foil specific requests*/
export const DesignerMediaRenditionFoilRequestData: DesignerMediaRenditionFoilRequestDataSchema =
  _DesignerMediaRenditionFoilRequestData;
export type DesignerMediaRenditionFoilRequestData = z.infer<
  typeof DesignerMediaRenditionFoilRequestData
>;
