import { z } from "zod";
declare const _Tag: z.ZodEnum<{
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
type _TagSchema = typeof _Tag;
export interface TagSchema extends _TagSchema {
}
export declare const Tag: TagSchema;
export type Tag = z.infer<typeof Tag>;
export {};
//# sourceMappingURL=Tag.d.ts.map