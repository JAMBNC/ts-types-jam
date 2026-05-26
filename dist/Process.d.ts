import { z } from "zod";
/**Defines how visual content is transferred to the medium.*/
export declare const Process: z.ZodEnum<{
    screen: "screen";
    offset: "offset";
    digital: "digital";
    foil: "foil";
    emboss: "emboss";
    inkjet: "inkjet";
    flexography: "flexography";
    sublimation: "sublimation";
    thermal: "thermal";
}>;
export type Process = z.infer<typeof Process>;
//# sourceMappingURL=Process.d.ts.map