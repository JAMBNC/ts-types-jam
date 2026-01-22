import { z } from "zod/v4";
export declare const Process: z.ZodEnum<{
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
export type Process = z.infer<typeof Process>;
//# sourceMappingURL=Process.d.ts.map