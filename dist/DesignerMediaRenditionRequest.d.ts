import { z } from "zod";
/**The request body for the media rendition endpoint.*/
export declare const DesignerMediaRenditionRequest: z.ZodObject<{
    data: z.ZodObject<{
        process: z.ZodEnum<{
            offset: "offset";
            digital: "digital";
            foil: "foil";
            emboss: "emboss";
            screen: "screen";
            inkjet: "inkjet";
            flexography: "flexography";
            sublimation: "sublimation";
            thermal: "thermal";
        }>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerMediaRenditionRequest = z.infer<typeof DesignerMediaRenditionRequest>;
//# sourceMappingURL=DesignerMediaRenditionRequest.d.ts.map