import { z } from "zod";

const _FrameTypeAdderCode = z.enum(["text", "image"]);
type _FrameTypeAdderCodeSchema = typeof _FrameTypeAdderCode;
export interface FrameTypeAdderCodeSchema extends _FrameTypeAdderCodeSchema {}
export const FrameTypeAdderCode: FrameTypeAdderCodeSchema = _FrameTypeAdderCode;
export type FrameTypeAdderCode = z.infer<typeof FrameTypeAdderCode>;
