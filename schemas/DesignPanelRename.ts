import { z } from "zod";

const _DesignPanelRename = z
  .object({
    panelId: z.string(),
    name: z.string().min(1),
    /**What a reviewer reads. Absent means the label is derived from the name.*/
    label: z
      .string()
      .min(1)
      .describe(
        "What a reviewer reads. Absent means the label is derived from the name.",
      )
      .optional(),
  })
  .strict()
  .describe("Prepress renamed a panel.");
type _DesignPanelRenameSchema = typeof _DesignPanelRename;
export interface DesignPanelRenameSchema extends _DesignPanelRenameSchema {}
/**Prepress renamed a panel.*/
export const DesignPanelRename: DesignPanelRenameSchema = _DesignPanelRename;
export type DesignPanelRename = z.infer<typeof DesignPanelRename>;
