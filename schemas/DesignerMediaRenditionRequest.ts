import { z } from "zod";
import { DesignerMediaRenditionBaseRequestData } from "./DesignerMediaRenditionBaseRequestData.js";
import { DesignerMediaRenditionFoilRequestData } from "./DesignerMediaRenditionFoilRequestData.js";

const _DesignerMediaRenditionRequest = z
  .object({
    data: z.union([
      DesignerMediaRenditionBaseRequestData,
      DesignerMediaRenditionFoilRequestData,
    ]),
  })
  .strict()
  .describe("The request body for the media rendition endpoint.");
type _DesignerMediaRenditionRequestSchema =
  typeof _DesignerMediaRenditionRequest;
export interface DesignerMediaRenditionRequestSchema extends _DesignerMediaRenditionRequestSchema {}
/**The request body for the media rendition endpoint.*/
export const DesignerMediaRenditionRequest: DesignerMediaRenditionRequestSchema =
  _DesignerMediaRenditionRequest;
export type DesignerMediaRenditionRequest = z.infer<
  typeof DesignerMediaRenditionRequest
>;
