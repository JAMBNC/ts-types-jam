import { z } from "zod";
import { Color } from "./Color.js";
import { IngredientMetadataType } from "./IngredientMetadataType.js";
export const DesignerChangeColorTrackingEvent = z
    .object({
    event: z.literal("designer_change_color"),
    payload: z
        .object({
        type: z.union([IngredientMetadataType, z.null()]).optional(),
        oldColors: z.array(Color),
        newColors: z.array(Color),
    })
        .strict(),
})
    .strict();
