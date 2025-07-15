import { z } from "zod/v4";
export declare const Tag: z.ZodEnum<{
    PRIMARY: "PRIMARY";
    SMALL: "SMALL";
    THUMBNAIL: "THUMBNAIL";
    YOUR_LOGO_HERE: "YOUR_LOGO_HERE";
    OTHER: "OTHER";
}>;
export type Tag = z.infer<typeof Tag>;
//# sourceMappingURL=Tag.d.ts.map