import { z } from "zod";
import { Rect } from "./Rect.js";
import { ViewLayer } from "./ViewLayer.js";

/**An ingredient for representing chili asset images*/
export const ChiliAssetIngredient = z
  .object({
    type: z.literal("chiliAsset"),
    dropshadow: z.boolean().optional(),
    editable: z.boolean().optional(),
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    /**Arbitrary metadata.*/
    metadata: z
      .record(z.string(), z.any())
      .describe("Arbitrary metadata.")
      .optional(),
    opacity: z.number().gte(0).lte(1),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
    asset: z.object({ externalId: z.string(), path: z.string() }).strict(),
    /**Rotation angle in degrees.*/
    rotation: z.number().describe("Rotation angle in degrees."),
    textureMask: z.boolean().optional(),
    validatorBoundingShape: z.boolean().optional(),
    viewLayer: ViewLayer.optional(),
    zIndex: z.number().int(),
  })
  .strict()
  .describe("An ingredient for representing chili asset images");
export type ChiliAssetIngredient = z.infer<typeof ChiliAssetIngredient>;
