import { z } from "zod";
export const Process = z
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
])
    .describe("Defines how visual content is transferred to the medium.");
