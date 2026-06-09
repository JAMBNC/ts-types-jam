import { z } from "zod";
import { TextureColor } from "./TextureColor.js";
import { TextureImage } from "./TextureImage.js";

/**A coating or coloring applied to the document*/
export const Coating = z
  .object({
    identifier: z.string(),
    opacity: z.number(),
    texture: z.union([TextureColor, TextureImage]),
    type: z.enum(["color", "image", "blank"]),
    zIndex: z.number().int(),
    /**Arbitrary metadata.*/
    metadata: z
      .record(z.string(), z.any())
      .describe("Arbitrary metadata.")
      .optional(),
  })
  .strict()
  .describe("A coating or coloring applied to the document");
export type Coating = z.infer<typeof Coating>;
