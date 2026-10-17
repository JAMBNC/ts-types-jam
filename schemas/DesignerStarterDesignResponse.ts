import { z } from "zod";
import { DesignState } from "./DesignState.js";
import { DesignerBaseDesignBoot } from "./DesignerBaseDesignBoot.js";

const _DesignerStarterDesignResponse = z
  .object({
    /**The complete design state containing dimensions, pages, and ingredients.*/
    design: DesignState,
    /**What the designer needs of a style's base design to dress a view-bound design: the template it was instantiated from and the placement regions of each page.*/
    baseDesign: DesignerBaseDesignBoot.optional(),
    /**The workspace option to switch to, when the starter names or implies one.*/
    workspaceOptionUuid: z
      .string()
      .regex(
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
      )
      .describe(
        "The workspace option to switch to, when the starter names or implies one.",
      )
      .optional(),
  })
  .strict()
  .describe(
    "A starter's design, ready to load onto the current product as a new design: no uuid, and metadata.startedFrom names the starter.",
  );
type _DesignerStarterDesignResponseSchema =
  typeof _DesignerStarterDesignResponse;
export interface DesignerStarterDesignResponseSchema extends _DesignerStarterDesignResponseSchema {}
/**A starter's design, ready to load onto the current product as a new design: no uuid, and metadata.startedFrom names the starter.*/
export const DesignerStarterDesignResponse: DesignerStarterDesignResponseSchema =
  _DesignerStarterDesignResponse;
export type DesignerStarterDesignResponse = z.infer<
  typeof DesignerStarterDesignResponse
>;
