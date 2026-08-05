import { z } from "zod";

const _DesignerMediaRenditionBaseRequestData = z
  .object({
    /**Defines how visual content is transferred to the medium.*/
    process: z
      .enum([
        "offset",
        "digital",
        "emboss",
        "screen",
        "inkjet",
        "flexography",
        "sublimation",
        "thermal",
      ])
      .describe("Defines how visual content is transferred to the medium."),
  })
  .strict()
  .describe(
    "The request body data for the media rendition endpoint for basic requests that require only process",
  );
type _DesignerMediaRenditionBaseRequestDataSchema =
  typeof _DesignerMediaRenditionBaseRequestData;
export interface DesignerMediaRenditionBaseRequestDataSchema extends _DesignerMediaRenditionBaseRequestDataSchema {}
/**The request body data for the media rendition endpoint for basic requests that require only process*/
export const DesignerMediaRenditionBaseRequestData: DesignerMediaRenditionBaseRequestDataSchema =
  _DesignerMediaRenditionBaseRequestData;
export type DesignerMediaRenditionBaseRequestData = z.infer<
  typeof DesignerMediaRenditionBaseRequestData
>;
