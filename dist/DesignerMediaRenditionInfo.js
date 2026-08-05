import { z } from "zod";
import { DesignerMediaRenditionColorInfo } from "./DesignerMediaRenditionColorInfo.js";
import { DesignerMediaRenditionFoilInfo } from "./DesignerMediaRenditionFoilInfo.js";
const _DesignerMediaRenditionInfo = z
    .union([DesignerMediaRenditionColorInfo, DesignerMediaRenditionFoilInfo])
    .describe("The rendition data returned on a successful media rendition request.");
/**The rendition data returned on a successful media rendition request.*/
export const DesignerMediaRenditionInfo = _DesignerMediaRenditionInfo;
