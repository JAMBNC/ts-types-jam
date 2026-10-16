import { z } from "zod";
import { Path } from "./Path.js";

const _DesignPanel = z
  .object({
    id: z.string(),
    /**Stable machine name, `[position][Kind]` from the panel vocabulary, e.g. "frontCover" or "leftPocket".*/
    name: z
      .string()
      .describe(
        'Stable machine name, `[position][Kind]` from the panel vocabulary, e.g. "frontCover" or "leftPocket".',
      )
      .optional(),
    /**What a human is shown. Display text is data, never baked into a widget.*/
    label: z
      .string()
      .describe(
        "What a human is shown. Display text is data, never baked into a widget.",
      )
      .optional(),
    /**What the panel is, such as cover, pocket or glueFlap. An open string resolved against the panel vocabulary, like TemplateKind.*/
    kind: z
      .string()
      .describe(
        "What the panel is, such as cover, pocket or glueFlap. An open string resolved against the panel vocabulary, like TemplateKind.",
      )
      .optional(),
    /**The id of the panel this one hangs off and folds against, such as a pocket tab on its pocket.*/
    attachedTo: z
      .string()
      .describe(
        "The id of the panel this one hangs off and folds against, such as a pocket tab on its pocket.",
      )
      .optional(),
    /**A vector path consisting of ordered control points.*/
    path: Path,
    /**Whether a customer may place art here. Glue tabs are not designable.*/
    designable: z
      .boolean()
      .describe(
        "Whether a customer may place art here. Glue tabs are not designable.",
      )
      .optional(),
    /**The folds bounding this panel.*/
    foldIds: z
      .array(z.string())
      .describe("The folds bounding this panel.")
      .optional(),
  })
  .strict()
  .describe("One planar face of the folded product.");
type _DesignPanelSchema = typeof _DesignPanel;
export interface DesignPanelSchema extends _DesignPanelSchema {}
/**One planar face of the folded product.*/
export const DesignPanel: DesignPanelSchema = _DesignPanel;
export type DesignPanel = z.infer<typeof DesignPanel>;
