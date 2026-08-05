import { z } from "zod";
import { PositionType } from "./PositionType.js";

const _ContentPlacement = z
  .object({
    type: z.string().optional(),
    side: z.string().optional(),
    x: z.string().optional(),
    xType: PositionType.optional(),
    y: z.string().optional(),
    yType: PositionType.optional(),
  })
  .passthrough();
type _ContentPlacementSchema = typeof _ContentPlacement;
export interface ContentPlacementSchema extends _ContentPlacementSchema {}
export const ContentPlacement: ContentPlacementSchema = _ContentPlacement;
export type ContentPlacement = z.infer<typeof ContentPlacement>;
