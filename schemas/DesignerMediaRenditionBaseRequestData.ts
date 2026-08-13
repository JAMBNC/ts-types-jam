import { z } from "zod";
import { Process } from "./Process.js";

const _DesignerMediaRenditionBaseRequestData = z
  .object({
    /**Defines how visual content is transferred to the medium.*/
    process: Process,
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
