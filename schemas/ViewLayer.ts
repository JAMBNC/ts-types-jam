import { z } from "zod";

const _ViewLayer = z.enum(["background", "bleed", "mask", "print"]);
type _ViewLayerSchema = typeof _ViewLayer;
export interface ViewLayerSchema extends _ViewLayerSchema {}
export const ViewLayer: ViewLayerSchema = _ViewLayer;
export type ViewLayer = z.infer<typeof ViewLayer>;
