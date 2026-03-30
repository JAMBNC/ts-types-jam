import { z } from "zod";
export declare const Tag: z.ZodEnum<{
    small: "small";
    primary: "primary";
    thumbnail: "thumbnail";
    yourLogoHere: "yourLogoHere";
    insideView: "insideView";
    swatch: "swatch";
    amazon: "amazon";
    carousel: "carousel";
    other: "other";
}>;
export type Tag = z.infer<typeof Tag>;
//# sourceMappingURL=Tag.d.ts.map