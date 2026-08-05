import { z } from "zod";

const _MaterialCode = z
  .enum(["nonPorous", "porous"])
  .describe("The material code for the material being printed upon");
type _MaterialCodeSchema = typeof _MaterialCode;
export interface MaterialCodeSchema extends _MaterialCodeSchema {}
/**The material code for the material being printed upon*/
export const MaterialCode: MaterialCodeSchema = _MaterialCode;
export type MaterialCode = z.infer<typeof MaterialCode>;
