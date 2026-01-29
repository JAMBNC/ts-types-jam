import { z } from "zod";
export declare const MediaType: z.ZodEnum<{
    image: "image";
    video: "video";
}>;
export type MediaType = z.infer<typeof MediaType>;
//# sourceMappingURL=MediaType.d.ts.map