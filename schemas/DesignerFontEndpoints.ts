import { z } from "zod";

const _DesignerFontEndpoints = z
  .object({
    /**The (optional) endpoint URL for retrieving all supported fonts*/
    all: z
      .string()
      .url()
      .describe(
        "The (optional) endpoint URL for retrieving all supported fonts",
      ),
  })
  .strict();
type _DesignerFontEndpointsSchema = typeof _DesignerFontEndpoints;
export interface DesignerFontEndpointsSchema extends _DesignerFontEndpointsSchema {}
export const DesignerFontEndpoints: DesignerFontEndpointsSchema =
  _DesignerFontEndpoints;
export type DesignerFontEndpoints = z.infer<typeof DesignerFontEndpoints>;
