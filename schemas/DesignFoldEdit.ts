import { z } from "zod";
import { DesignFace } from "./DesignFace.js";
import { DesignFoldEditMode } from "./DesignFoldEditMode.js";

const _DesignFoldEdit = z
  .object({
    /**How the fold engine treats the edited inputs: rederive keeps the views and re-derives their placements, propose lets it propose views afresh.*/
    mode: DesignFoldEditMode,
    /**The panel that stays put while the sheet folds.*/
    fixedFace: z
      .string()
      .describe("The panel that stays put while the sheet folds.")
      .optional(),
    /**Panels whose kind changed.*/
    kinds: z
      .array(z.object({ panelId: z.string(), kind: z.string() }).strict())
      .describe("Panels whose kind changed.")
      .optional(),
    /**Folds whose direction changed.*/
    creases: z
      .array(
        z
          .object({
            foldId: z.string(),
            /**none takes the crease out of the fold.*/
            direction: z
              .enum(["mountain", "valley", "none"])
              .describe("none takes the crease out of the fold."),
          })
          .strict(),
      )
      .describe("Folds whose direction changed.")
      .optional(),
    /**Hinges opened or closed.*/
    open: z
      .array(z.object({ hingeId: z.string(), folded: z.boolean() }).strict())
      .describe("Hinges opened or closed.")
      .optional(),
    /**View settings that changed.*/
    views: z
      .array(
        z
          .object({
            id: z.string(),
            /**What a human is shown for the view. Prepress sets it here because the fold engine's names are not the product's.*/
            label: z
              .string()
              .describe(
                "What a human is shown for the view. Prepress sets it here because the fold engine's names are not the product's.",
              )
              .optional(),
            state: z.string().optional(),
            /**Which side of the sheet the view shows.*/
            camera: DesignFace.optional(),
            upright: z.boolean().optional(),
            preview: z.boolean().optional(),
          })
          .strict(),
      )
      .describe("View settings that changed.")
      .optional(),
  })
  .strict()
  .describe(
    "The fold model inputs prepress changed. The interpretation is re-folded under them.",
  );
type _DesignFoldEditSchema = typeof _DesignFoldEdit;
export interface DesignFoldEditSchema extends _DesignFoldEditSchema {}
/**The fold model inputs prepress changed. The interpretation is re-folded under them.*/
export const DesignFoldEdit: DesignFoldEditSchema = _DesignFoldEdit;
export type DesignFoldEdit = z.infer<typeof DesignFoldEdit>;
