import { z } from "zod";
import { IngredientMetadataType } from "./IngredientMetadataType.js";
export const TrackingEvent_designer_remove_item = z
    .object({
    event: z.literal("designer_remove_item"),
    payload: z
        .object({ type: z.union([IngredientMetadataType, z.null()]).optional() })
        .strict(),
})
    .strict();
