import { z } from "zod";
const _DesignPlanePoint = z
    .object({ x: z.number(), y: z.number() })
    .strict()
    .describe("A point as two plain numbers, in whatever unit the type holding it names.");
/**A point as two plain numbers, in whatever unit the type holding it names.*/
export const DesignPlanePoint = _DesignPlanePoint;
