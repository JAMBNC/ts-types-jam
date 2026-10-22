import { z } from "zod";
import { Path } from "./Path.js";
const _DesignOptionalCut = z
    .object({
    id: z.string(),
    /**A vector path consisting of ordered control points.*/
    path: Path,
    /**The panel the cut lies in, so slit options are chosen per pocket.*/
    panelId: z
        .string()
        .describe("The panel the cut lies in, so slit options are chosen per pocket.")
        .optional(),
    /**The vendor layer the cut is drawn on, read from the subpaths drawn along it.*/
    layer: z
        .string()
        .describe("The vendor layer the cut is drawn on, read from the subpaths drawn along it.")
        .optional(),
    /**The vendor named the layer as an option, so the cut is a priced choice and never cut out of the base.*/
    option: z
        .boolean()
        .describe("The vendor named the layer as an option, so the cut is a priced choice and never cut out of the base.")
        .optional(),
    /**The vendor named the layer as standard, so the cut ships on every piece: it belongs to the die, is drawn on the die plate and shown with the outline. Never set together with option.*/
    standard: z
        .boolean()
        .describe("The vendor named the layer as standard, so the cut ships on every piece: it belongs to the die, is drawn on the die plate and shown with the outline. Never set together with option.")
        .optional(),
})
    .strict()
    .describe("One interior cut on the flat sheet that is not the die outline. A priced vendor attribute rather than artwork, kept so the shape survives intake.");
/**One interior cut on the flat sheet that is not the die outline. A priced vendor attribute rather than artwork, kept so the shape survives intake.*/
export const DesignOptionalCut = _DesignOptionalCut;
