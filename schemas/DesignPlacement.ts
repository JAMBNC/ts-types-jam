import { z } from "zod";
import { DesignAffinePlacement } from "./DesignAffinePlacement.js";

const _DesignPlacement = DesignAffinePlacement.describe(
  "How a panel maps into a view. A tagged union: today one affine variant covers every assembly a folder has (rigid, reflected, flipped, and any composition), and a cylinder or a wrap can add a non-affine variant additively later.",
);
type _DesignPlacementSchema = typeof _DesignPlacement;
export interface DesignPlacementSchema extends _DesignPlacementSchema {}
/**How a panel maps into a view. A tagged union: today one affine variant covers every assembly a folder has (rigid, reflected, flipped, and any composition), and a cylinder or a wrap can add a non-affine variant additively later.*/
export const DesignPlacement: DesignPlacementSchema = _DesignPlacement;
export type DesignPlacement = z.infer<typeof DesignPlacement>;
