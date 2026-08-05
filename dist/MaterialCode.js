import { z } from "zod";
const _MaterialCode = z
    .enum(["nonPorous", "porous"])
    .describe("The material code for the material being printed upon");
/**The material code for the material being printed upon*/
export const MaterialCode = _MaterialCode;
