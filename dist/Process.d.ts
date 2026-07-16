import { z } from "zod";
/**Defines how visual content is transferred to the medium.*/
export declare const Process: z.ZodEnum<{
    digital: "digital";
    emboss: "emboss";
    flexography: "flexography";
    foil: "foil";
    inkjet: "inkjet";
    offset: "offset";
    screen: "screen";
    sublimation: "sublimation";
    thermal: "thermal";
}>;
export type Process = z.infer<typeof Process>;
//# sourceMappingURL=Process.d.ts.map