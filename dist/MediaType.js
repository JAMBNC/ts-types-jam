import { z } from "zod";
const _MediaType = z.enum(["image", "video"]);
export const MediaType = _MediaType;
