import { z } from "zod";

const _DesignFace = z
  .enum(["print", "reverse"])
  .describe("Which side of the sheet the view shows.");
type _DesignFaceSchema = typeof _DesignFace;
export interface DesignFaceSchema extends _DesignFaceSchema {}
/**Which side of the sheet the view shows.*/
export const DesignFace: DesignFaceSchema = _DesignFace;
export type DesignFace = z.infer<typeof DesignFace>;
