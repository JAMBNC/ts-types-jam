import { z } from "zod";
declare const _MediaType: z.ZodEnum<{
    image: "image";
    video: "video";
}>;
type _MediaTypeSchema = typeof _MediaType;
export interface MediaTypeSchema extends _MediaTypeSchema {
}
export declare const MediaType: MediaTypeSchema;
export type MediaType = z.infer<typeof MediaType>;
export {};
//# sourceMappingURL=MediaType.d.ts.map