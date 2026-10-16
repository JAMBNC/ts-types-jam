import { z } from "zod";

const _DesignFoldState = z
  .object({
    id: z.string(),
    label: z.string().optional(),
    /**Hinge id to degrees. Positive is a valley toward the print side, negative a mountain away from it, 0 flat and 180 folded flat. Absent is 0.*/
    angles: z
      .record(z.string(), z.number())
      .describe(
        "Hinge id to degrees. Positive is a valley toward the print side, negative a mountain away from it, 0 flat and 180 folded flat. Absent is 0.",
      )
      .optional(),
    /**Hinge ids in the order they fold. A later fold lies outside an earlier one.*/
    sequence: z
      .array(z.string())
      .describe(
        "Hinge ids in the order they fold. A later fold lies outside an earlier one.",
      )
      .optional(),
  })
  .strict()
  .describe("A named set of hinge angles and the order they fold in.");
type _DesignFoldStateSchema = typeof _DesignFoldState;
export interface DesignFoldStateSchema extends _DesignFoldStateSchema {}
/**A named set of hinge angles and the order they fold in.*/
export const DesignFoldState: DesignFoldStateSchema = _DesignFoldState;
export type DesignFoldState = z.infer<typeof DesignFoldState>;
