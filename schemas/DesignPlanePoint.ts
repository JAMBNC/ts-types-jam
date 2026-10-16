import { z } from "zod";

const _DesignPlanePoint = z
  .object({ x: z.number(), y: z.number() })
  .strict()
  .describe(
    "A point as two plain numbers, in whatever unit the type holding it names.",
  );
type _DesignPlanePointSchema = typeof _DesignPlanePoint;
export interface DesignPlanePointSchema extends _DesignPlanePointSchema {}
/**A point as two plain numbers, in whatever unit the type holding it names.*/
export const DesignPlanePoint: DesignPlanePointSchema = _DesignPlanePoint;
export type DesignPlanePoint = z.infer<typeof DesignPlanePoint>;
