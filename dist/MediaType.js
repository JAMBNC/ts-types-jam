import { z } from "zod";
export const MediaType = z.enum(["image", "video"]);
