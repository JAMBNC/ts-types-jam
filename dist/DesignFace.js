import { z } from "zod";
const _DesignFace = z
    .enum(["print", "reverse"])
    .describe("Which side of the sheet the view shows.");
/**Which side of the sheet the view shows.*/
export const DesignFace = _DesignFace;
