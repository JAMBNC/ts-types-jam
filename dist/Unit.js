import { z } from "zod";
/**The unit of measurement for dimensions.*/
export const Unit = z
    .enum(["mm", "in", "px", "pt"])
    .describe("The unit of measurement for dimensions.");
