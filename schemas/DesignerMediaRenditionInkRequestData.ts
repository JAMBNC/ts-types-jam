import { z } from "zod";
import { Color } from "./Color.js";

const _DesignerMediaRenditionInkRequestData = z
  .object({ process: z.enum(["offset", "digital"]), ink: Color })
  .strict()
  .describe(
    "The request body data for the media rendition endpoint when a vector prints in one chosen ink: the art becomes a single plate named for that ink, the way foil becomes a single foil plate.",
  );
type _DesignerMediaRenditionInkRequestDataSchema =
  typeof _DesignerMediaRenditionInkRequestData;
export interface DesignerMediaRenditionInkRequestDataSchema extends _DesignerMediaRenditionInkRequestDataSchema {}
/**The request body data for the media rendition endpoint when a vector prints in one chosen ink: the art becomes a single plate named for that ink, the way foil becomes a single foil plate.*/
export const DesignerMediaRenditionInkRequestData: DesignerMediaRenditionInkRequestDataSchema =
  _DesignerMediaRenditionInkRequestData;
export type DesignerMediaRenditionInkRequestData = z.infer<
  typeof DesignerMediaRenditionInkRequestData
>;
