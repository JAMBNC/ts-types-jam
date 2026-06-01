import { z } from "zod";
/**The material code for the material being printed upon*/
export const MaterialCode = z
    .enum(["nonPorous", "porous"])
    .describe("The material code for the material being printed upon");
