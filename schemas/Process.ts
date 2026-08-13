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
type _ProcessSchema = typeof _Process;
export interface ProcessSchema extends _ProcessSchema {}
/**Defines how visual content is transferred to the medium.*/
export const Process: ProcessSchema = _Process;
export type Process = z.infer<typeof Process>;
