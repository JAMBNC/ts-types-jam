import { z } from "zod";
export declare const Tag: z.ZodEnum<{
    amazon: "amazon";
    carousel: "carousel";
    insideView: "insideView";
    other: "other";
    primary: "primary";
    small: "small";
    swatch: "swatch";
    thumbnail: "thumbnail";
    yourLogoHere: "yourLogoHere";
}>;
export type Tag = z.infer<typeof Tag>;
//# sourceMappingURL=Tag.d.ts.map