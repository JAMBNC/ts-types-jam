import { z } from "zod";
const _FrameTypeAdderCode = z.enum(["text", "image"]);
export const FrameTypeAdderCode = _FrameTypeAdderCode;
