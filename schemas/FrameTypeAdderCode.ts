import { z } from "zod";

export const FrameTypeAdderCode = z.enum(["text", "image"]);
export type FrameTypeAdderCode = z.infer<typeof FrameTypeAdderCode>;
