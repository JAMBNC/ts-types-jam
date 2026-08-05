import { z } from "zod";

const _DesignerImageReductionConfig = z
  .object({
    /**If the designer will attempt image reduction or not*/
    enabled: z
      .boolean()
      .describe("If the designer will attempt image reduction or not")
      .default(false),
    /**The maximum amount of colors the image reducer will attempt to reduce to*/
    maxColors: z
      .number()
      .describe(
        "The maximum amount of colors the image reducer will attempt to reduce to",
      )
      .default(2),
    /**The url for performing the image reduction itself*/
    reductionEndpointUrl: z
      .string()
      .url()
      .describe("The url for performing the image reduction itself")
      .optional(),
    /**The url for performing the image recolor operations*/
    recolorEndpointUrl: z
      .string()
      .url()
      .describe("The url for performing the image recolor operations")
      .optional(),
  })
  .passthrough()
  .default({});
type _DesignerImageReductionConfigSchema = typeof _DesignerImageReductionConfig;
export interface DesignerImageReductionConfigSchema extends _DesignerImageReductionConfigSchema {}
export const DesignerImageReductionConfig: DesignerImageReductionConfigSchema =
  _DesignerImageReductionConfig;
export type DesignerImageReductionConfig = z.infer<
  typeof DesignerImageReductionConfig
>;
