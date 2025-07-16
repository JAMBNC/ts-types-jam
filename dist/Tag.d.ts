import { z } from "zod/v4";
export declare const Tag: z.ZodEnum<{
    PRIMARY: "PRIMARY";
    SMALL: "SMALL";
    THUMBNAIL: "THUMBNAIL";
    YOUR_LOGO_HERE: "YOUR_LOGO_HERE";
    INSIDE_VIEW: "INSIDE_VIEW";
    SWATCH: "SWATCH";
    AMAZON: "AMAZON";
    CAROUSEL: "CAROUSEL";
    OTHER: "OTHER";
}>;
export type Tag = z.infer<typeof Tag>;
//# sourceMappingURL=Tag.d.ts.map