import { z } from "zod";
import { DesignerMediaRenditionColorInfo } from "./DesignerMediaRenditionColorInfo.js";
import { DesignerMediaRenditionFoilInfo } from "./DesignerMediaRenditionFoilInfo.js";

const _DesignerMediaRenditionInfo = z
  .union([DesignerMediaRenditionColorInfo, DesignerMediaRenditionFoilInfo])
  .describe(
    "The rendition data returned on a successful media rendition request.",
  );
type _DesignerMediaRenditionInfoSchema = typeof _DesignerMediaRenditionInfo;
export interface DesignerMediaRenditionInfoSchema extends _DesignerMediaRenditionInfoSchema {}
/**The rendition data returned on a successful media rendition request.*/
export const DesignerMediaRenditionInfo: DesignerMediaRenditionInfoSchema =
  _DesignerMediaRenditionInfo;
export type DesignerMediaRenditionInfo = z.infer<
  typeof DesignerMediaRenditionInfo
>;
