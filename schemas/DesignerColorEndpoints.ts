import { z } from "zod";

const _DesignerColorEndpoints = z
  .object({
    /**The endpoint URL for retrieving all supported colors + vendor colors*/
    all: z
      .string()
      .url()
      .describe(
        "The endpoint URL for retrieving all supported colors + vendor colors",
      ),
    /**The endpoint URL for retrieving color palettes*/
    palettes: z
      .string()
      .url()
      .describe("The endpoint URL for retrieving color palettes"),
  })
  .strict();
type _DesignerColorEndpointsSchema = typeof _DesignerColorEndpoints;
export interface DesignerColorEndpointsSchema extends _DesignerColorEndpointsSchema {}
export const DesignerColorEndpoints: DesignerColorEndpointsSchema =
  _DesignerColorEndpoints;
export type DesignerColorEndpoints = z.infer<typeof DesignerColorEndpoints>;
