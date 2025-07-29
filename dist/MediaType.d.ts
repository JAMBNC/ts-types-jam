import { z } from "zod/v4";
export declare const MediaType: z.ZodEnum<{
    Image: "Image";
    Video: "Video";
}>;
export type MediaType = z.infer<typeof MediaType>;
//# sourceMappingURL=MediaType.d.ts.map