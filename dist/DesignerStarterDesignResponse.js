import { z } from "zod";
import { DesignState } from "./DesignState.js";
import { DesignerBaseDesignBoot } from "./DesignerBaseDesignBoot.js";
import { DesignerProductSwitch } from "./DesignerProductSwitch.js";
const _DesignerStarterDesignResponse = z
    .object({
    /**The complete design state containing dimensions, pages, and ingredients.*/
    design: DesignState,
    /**What the designer needs of a style's base design to dress a view-bound design: the template it was instantiated from and the placement regions of each page.*/
    baseDesign: DesignerBaseDesignBoot.optional(),
    /**The workspace option to switch to, when the starter names or implies one.*/
    workspaceOptionUuid: z
        .string()
        .regex(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
        .describe("The workspace option to switch to, when the starter names or implies one.")
        .optional(),
    /**The product the designer switches to, with the config, pricing and rules that come with it, resolved for the token's channel. The designer applies it in place and emits productChange with the sku.*/
    productSwitch: DesignerProductSwitch.optional(),
})
    .strict()
    .describe("A starter's design, ready to load as a new design: no uuid, and metadata.startedFrom names the starter. It loads onto the current product, or onto productSwitch's product when the starter is sold as a different one.");
/**A starter's design, ready to load as a new design: no uuid, and metadata.startedFrom names the starter. It loads onto the current product, or onto productSwitch's product when the starter is sold as a different one.*/
export const DesignerStarterDesignResponse = _DesignerStarterDesignResponse;
