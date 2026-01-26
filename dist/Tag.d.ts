import { z } from "zod/v4";
export declare const Tag: z.ZodEnum<{
    primary: "primary";
    small: "small";
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