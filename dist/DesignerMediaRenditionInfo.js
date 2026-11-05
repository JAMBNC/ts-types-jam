import { z } from "zod";
import { DesignerMediaRenditionColorInfo } from "./DesignerMediaRenditionColorInfo.js";
import { DesignerMediaRenditionFoilInfo } from "./DesignerMediaRenditionFoilInfo.js";
import { DesignerMediaRenditionPlateInfo } from "./DesignerMediaRenditionPlateInfo.js";
const _DesignerMediaRenditionInfo = z
    .union([
    DesignerMediaRenditionColorInfo,
    DesignerMediaRenditionFoilInfo,
    DesignerMediaRenditionPlateInfo,
])
    .describe("The rendition data returned on a successful media rendition request.");
/**The rendition data returned on a successful media rendition request.*/
export const DesignerMediaRenditionInfo = _DesignerMediaRenditionInfo;
