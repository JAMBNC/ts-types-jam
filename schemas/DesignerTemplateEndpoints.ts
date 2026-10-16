import { z } from "zod";

const _DesignerTemplateEndpoints = z
  .object({
    /**The endpoint URL for downloading full design template files.*/
    download: z
      .string()
      .url()
      .describe("The endpoint URL for downloading full design template files."),
    /**The endpoint URL that places a whole die-sheet PDF onto a folding design's views. (uses the DesignerAuth.endpointAuth)*/
    sheetUpload: z
      .string()
      .url()
      .describe(
        "The endpoint URL that places a whole die-sheet PDF onto a folding design's views. (uses the DesignerAuth.endpointAuth)",
      )
      .optional(),
  })
  .strict();
type _DesignerTemplateEndpointsSchema = typeof _DesignerTemplateEndpoints;
export interface DesignerTemplateEndpointsSchema extends _DesignerTemplateEndpointsSchema {}
export const DesignerTemplateEndpoints: DesignerTemplateEndpointsSchema =
  _DesignerTemplateEndpoints;
export type DesignerTemplateEndpoints = z.infer<
  typeof DesignerTemplateEndpoints
>;
