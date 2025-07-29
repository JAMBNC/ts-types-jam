import { z } from "zod/v4";
export const MediaType = z.enum(["Image", "Video"]);
