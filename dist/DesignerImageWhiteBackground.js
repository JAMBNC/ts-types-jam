import { z } from "zod";
const _DesignerImageWhiteBackground = z
    .enum(["removed", "kept"])
    .describe("What happened to the white background fusion found on a raster: removed (the default) or kept because the customer asked for it. A rendition reports it, and a placed image stores it as metadata.background.");
/**What happened to the white background fusion found on a raster: removed (the default) or kept because the customer asked for it. A rendition reports it, and a placed image stores it as metadata.background.*/
export const DesignerImageWhiteBackground = _DesignerImageWhiteBackground;
