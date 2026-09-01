import { z } from "zod";
import { DesignState } from "./DesignState.js";

const _DesignerSaveRequest = z
  .object({
    /**The complete design state containing dimensions, pages, and ingredients.*/
    design: DesignState,
    /**The encoded snapshots as a json encoded string*/
    encodedSnapshots: z
      .string()
      .describe("The encoded snapshots as a json encoded string")
      .optional(),
    /**The translated config used by the current design session json encoded.*/
    config: z
      .string()
      .describe(
        "The translated config used by the current design session json encoded.",
      )
      .optional(),
    /**The preflight data in a json encoded string*/
    preflight: z
      .string()
      .describe("The preflight data in a json encoded string")
      .optional(),
  })
  .strict()
  .describe("The request payload for the design save endpoint.");
type _DesignerSaveRequestSchema = typeof _DesignerSaveRequest;
export interface DesignerSaveRequestSchema extends _DesignerSaveRequestSchema {}
/**The request payload for the design save endpoint.*/
export const DesignerSaveRequest: DesignerSaveRequestSchema =
  _DesignerSaveRequest;
export type DesignerSaveRequest = z.infer<typeof DesignerSaveRequest>;
