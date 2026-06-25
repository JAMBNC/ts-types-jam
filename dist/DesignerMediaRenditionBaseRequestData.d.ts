import { z } from "zod";
/**The request body data for the media rendition endpoint for basic requests that require only process*/
export declare const DesignerMediaRenditionBaseRequestData: z.ZodObject<{
    process: z.ZodEnum<{
        offset: "offset";
        digital: "digital";
        emboss: "emboss";
        screen: "screen";
        inkjet: "inkjet";
        flexography: "flexography";
        sublimation: "sublimation";
        thermal: "thermal";
    }>;
}, z.core.$strict>;
export type DesignerMediaRenditionBaseRequestData = z.infer<typeof DesignerMediaRenditionBaseRequestData>;
//# sourceMappingURL=DesignerMediaRenditionBaseRequestData.d.ts.map