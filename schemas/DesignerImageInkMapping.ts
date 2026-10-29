import { z } from "zod";
import { Color } from "./Color.js";
import { DesignerImageColorCluster } from "./DesignerImageColorCluster.js";

const _DesignerImageInkMapping = z
  .object({
    /**One colour fusion found in an image, as its analysis reports it.*/
    cluster: DesignerImageColorCluster,
    paletteColor: Color,
    /**CIEDE2000 distance between the cluster and the ink.*/
    deltaE: z
      .number()
      .describe("CIEDE2000 distance between the cluster and the ink."),
  })
  .strict()
  .describe("A colour cluster in an image and the palette ink it prints in.");
type _DesignerImageInkMappingSchema = typeof _DesignerImageInkMapping;
export interface DesignerImageInkMappingSchema extends _DesignerImageInkMappingSchema {}
/**A colour cluster in an image and the palette ink it prints in.*/
export const DesignerImageInkMapping: DesignerImageInkMappingSchema =
  _DesignerImageInkMapping;
export type DesignerImageInkMapping = z.infer<typeof DesignerImageInkMapping>;
