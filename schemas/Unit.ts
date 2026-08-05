import { z } from "zod";

const _Unit = z
  .enum(["mm", "in", "px", "pt"])
  .describe("The unit of measurement for dimensions.");
type _UnitSchema = typeof _Unit;
export interface UnitSchema extends _UnitSchema {}
/**The unit of measurement for dimensions.*/
export const Unit: UnitSchema = _Unit;
export type Unit = z.infer<typeof Unit>;
