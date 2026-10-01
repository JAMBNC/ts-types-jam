import { z } from "zod";

const _DesignerTemplateEndpoints = z
  .object({
    /**The endpoint URL for downloading full design template files.*/
    template: z
      .string()
      .url()
      .describe("The endpoint URL for downloading full design template files."),
  })
  .strict();
type _DesignerTemplateEndpointsSchema = typeof _DesignerTemplateEndpoints;
export interface DesignerTemplateEndpointsSchema extends _DesignerTemplateEndpointsSchema {}
export const DesignerTemplateEndpoints: DesignerTemplateEndpointsSchema =
  _DesignerTemplateEndpoints;
export type DesignerTemplateEndpoints = z.infer<
  typeof DesignerTemplateEndpoints
>;
