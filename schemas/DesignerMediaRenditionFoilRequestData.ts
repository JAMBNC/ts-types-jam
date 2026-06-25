import { z } from "zod";

/**The request body data for the media rendition endpoint for foil specific requests*/
export const DesignerMediaRenditionFoilRequestData = z
  .object({
    process: z.literal("foil"),
    /**Hex color code to render the foil image in*/
    color: z.string().describe("Hex color code to render the foil image in"),
  })
  .strict()
  .describe(
    "The request body data for the media rendition endpoint for foil specific requests",
  );
export type DesignerMediaRenditionFoilRequestData = z.infer<
  typeof DesignerMediaRenditionFoilRequestData
>;
