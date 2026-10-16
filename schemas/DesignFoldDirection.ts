import { z } from "zod";

const _DesignFoldDirection = z
  .enum(["mountain", "valley"])
  .describe("Which way the sheet folds, seen from the printed side.");
type _DesignFoldDirectionSchema = typeof _DesignFoldDirection;
export interface DesignFoldDirectionSchema extends _DesignFoldDirectionSchema {}
/**Which way the sheet folds, seen from the printed side.*/
export const DesignFoldDirection: DesignFoldDirectionSchema =
  _DesignFoldDirection;
export type DesignFoldDirection = z.infer<typeof DesignFoldDirection>;
