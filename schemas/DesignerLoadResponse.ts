import { z } from "zod";
import { DesignState } from "./DesignState.js";

const _DesignerLoadResponse = z
  .object({
    /**The complete design state containing dimensions, pages, and ingredients.*/
    design: DesignState,
    snapshots: z
      .array(z.object({ url: z.string().url(), label: z.string() }).strict())
      .optional(),
    /**Primary image used for previewing the design in cards or lists.*/
    designPreviewImage: z
      .string()
      .url()
      .describe(
        "Primary image used for previewing the design in cards or lists.",
      )
      .optional(),
  })
  .strict()
  .describe(
    "The response from the design load endpoint. If loading a saved design things like id, uuid, snapshots, and previewImage should be populated.",
  );
type _DesignerLoadResponseSchema = typeof _DesignerLoadResponse;
export interface DesignerLoadResponseSchema extends _DesignerLoadResponseSchema {}
/**The response from the design load endpoint. If loading a saved design things like id, uuid, snapshots, and previewImage should be populated.*/
export const DesignerLoadResponse: DesignerLoadResponseSchema =
  _DesignerLoadResponse;
export type DesignerLoadResponse = z.infer<typeof DesignerLoadResponse>;
