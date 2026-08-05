import { z } from "zod";
const _Unit = z
    .enum(["mm", "in", "px", "pt"])
    .describe("The unit of measurement for dimensions.");
/**The unit of measurement for dimensions.*/
export const Unit = _Unit;
