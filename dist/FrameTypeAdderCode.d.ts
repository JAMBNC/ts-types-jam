import { z } from "zod";
declare const _FrameTypeAdderCode: z.ZodEnum<{
    image: "image";
    text: "text";
}>;
type _FrameTypeAdderCodeSchema = typeof _FrameTypeAdderCode;
export interface FrameTypeAdderCodeSchema extends _FrameTypeAdderCodeSchema {
}
export declare const FrameTypeAdderCode: FrameTypeAdderCodeSchema;
export type FrameTypeAdderCode = z.infer<typeof FrameTypeAdderCode>;
export {};
//# sourceMappingURL=FrameTypeAdderCode.d.ts.map