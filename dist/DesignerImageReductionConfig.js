import { z } from "zod";
export const DesignerImageReductionConfig = z
    .object({
    /**If the designer will attempt image reduction or not*/
    enabled: z
        .boolean()
        .describe("If the designer will attempt image reduction or not")
        .default(false),
    /**The maximum amount of colors the image reducer will attempt to reduce to*/
    maxColors: z
        .number()
        .describe("The maximum amount of colors the image reducer will attempt to reduce to")
        .default(2),
    /**The url for performing the image reduction itself*/
    reductionEndpointUrl: z
        .string()
        .url()
        .describe("The url for performing the image reduction itself")
        .optional(),
})
    .passthrough()
    .default({});
