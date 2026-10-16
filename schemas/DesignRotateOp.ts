import { z } from "zod";

const _DesignRotateOp = z
  .object({
    op: z.literal("rotate"),
    /**Degrees, clockwise.*/
    degrees: z.number().describe("Degrees, clockwise."),
  })
  .strict()
  .describe(
    "Rotate the panel about the flat die's origin, clockwise in degrees. A cover's half turn is this.",
  );
type _DesignRotateOpSchema = typeof _DesignRotateOp;
export interface DesignRotateOpSchema extends _DesignRotateOpSchema {}
/**Rotate the panel about the flat die's origin, clockwise in degrees. A cover's half turn is this.*/
export const DesignRotateOp: DesignRotateOpSchema = _DesignRotateOp;
export type DesignRotateOp = z.infer<typeof DesignRotateOp>;
