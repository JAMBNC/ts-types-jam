import { z } from "zod";
declare const _Tag: z.ZodEnum<{
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
type _TagSchema = typeof _Tag;
export interface TagSchema extends _TagSchema {
}
export declare const Tag: TagSchema;
export type Tag = z.infer<typeof Tag>;
export {};
//# sourceMappingURL=Tag.d.ts.map