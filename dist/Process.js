import { z } from "zod";
const _Process = z
    .enum([
    "offset",
    "digital",
    "foil",
    "emboss",
    "screen",
    "inkjet",
    "flexography",
    "sublimation",
    "thermal",
    "whiteInk",
    "engraving",
    "letterpress",
])
    .describe("Defines how visual content is transferred to the medium.");
/**Defines how visual content is transferred to the medium.*/
export const Process = _Process;
