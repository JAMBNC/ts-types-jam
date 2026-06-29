import { z } from "zod";
import { DesignerMediaRenditionColorInfo } from "./DesignerMediaRenditionColorInfo.js";
import { DesignerMediaRenditionFoilInfo } from "./DesignerMediaRenditionFoilInfo.js";

/**The rendition data returned on a successful media rendition request.*/
export const DesignerMediaRenditionInfo = z
  .union([DesignerMediaRenditionColorInfo, DesignerMediaRenditionFoilInfo])
  .describe(
    "The rendition data returned on a successful media rendition request.",
  );
export type DesignerMediaRenditionInfo = z.infer<
  typeof DesignerMediaRenditionInfo
>;
