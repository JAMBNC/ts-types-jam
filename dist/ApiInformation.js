import { z } from "zod";
import { Layer } from "./Layer.js";
import { Side } from "./Side.js";
export const ApiInformation = z
    .object({
    identifier: z.string(),
    autoSeparated: z.boolean(),
    white: z.boolean(),
    sides: z.object({ side1: Side }).passthrough(),
    layers: z.array(Layer),
})
    .passthrough();
