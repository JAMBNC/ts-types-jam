import { z } from "zod";
import { DesignState } from "./DesignState.js";
import { DesignerBaseDesignBoot } from "./DesignerBaseDesignBoot.js";
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
        .describe("Primary image used for previewing the design in cards or lists.")
        .optional(),
    /**What the designer needs of a style's base design to dress a view-bound design: the template it was instantiated from and the placement regions of each page.*/
    baseDesign: DesignerBaseDesignBoot.optional(),
})
    .strict()
    .describe("The response from the design load endpoint. If loading a saved design things like id, uuid, snapshots, and previewImage should be populated.");
/**The response from the design load endpoint. If loading a saved design things like id, uuid, snapshots, and previewImage should be populated.*/
export const DesignerLoadResponse = _DesignerLoadResponse;
