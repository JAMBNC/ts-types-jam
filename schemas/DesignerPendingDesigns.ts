import { z } from "zod";

const _DesignerPendingDesigns = z.array(
  z
    .object({
      /**Primary image used for previewing the design in cards or lists.*/
      designPreviewImage: z
        .string()
        .url()
        .describe(
          "Primary image used for previewing the design in cards or lists.",
        ),
      /**Label to use for display.*/
      label: z.string().describe("Label to use for display."),
      snapshots: z.array(
        z.object({ url: z.string().url(), label: z.string() }).strict(),
      ),
      uuid: z.string(),
      status: z.string(),
    })
    .passthrough(),
);
type _DesignerPendingDesignsSchema = typeof _DesignerPendingDesigns;
export interface DesignerPendingDesignsSchema extends _DesignerPendingDesignsSchema {}
export const DesignerPendingDesigns: DesignerPendingDesignsSchema =
  _DesignerPendingDesigns;
export type DesignerPendingDesigns = z.infer<typeof DesignerPendingDesigns>;
