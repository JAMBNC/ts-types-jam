import { z } from "zod";
import { Dimension } from "./Dimension.js";
const _DesignDieOrigin = z
    .object({
    /**Zero-based page of the artifact the die was read from.*/
    page: z
        .number()
        .int()
        .gte(0)
        .describe("Zero-based page of the artifact the die was read from.")
        .optional(),
    x: Dimension,
    y: Dimension,
})
    .strict()
    .describe("The die's top-left corner on one page of the source artifact, y down from the page's top-left.");
/**The die's top-left corner on one page of the source artifact, y down from the page's top-left.*/
export const DesignDieOrigin = _DesignDieOrigin;
