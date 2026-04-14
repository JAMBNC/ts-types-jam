import { z } from "zod";
import { IngredientMetadataType } from "./IngredientMetadataType.js";
export const TrackingEvent_designer_change_font = z
    .object({
    event: z.literal("designer_change_font"),
    payload: z
        .object({
        type: z.union([IngredientMetadataType, z.null()]).optional(),
        oldFont: z.string(),
        newFont: z.string(),
    })
        .strict(),
})
    .strict();
