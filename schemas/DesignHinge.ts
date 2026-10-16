import { z } from "zod";

const _DesignHinge = z
  .object({
    id: z.string(),
    /**The crease the hinge turns about.*/
    foldId: z.string().describe("The crease the hinge turns about."),
    /**The two panels the crease joins.*/
    faces: z
      .array(z.string())
      .min(2)
      .max(2)
      .describe("The two panels the crease joins."),
  })
  .strict()
  .describe("A crease where it joins two panels.");
type _DesignHingeSchema = typeof _DesignHinge;
export interface DesignHingeSchema extends _DesignHingeSchema {}
/**A crease where it joins two panels.*/
export const DesignHinge: DesignHingeSchema = _DesignHinge;
export type DesignHinge = z.infer<typeof DesignHinge>;
