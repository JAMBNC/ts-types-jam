import { z } from "zod";
import { IngredientMetadataType } from "./IngredientMetadataType.js";
import { Process } from "./Process.js";

export const DesignerChangeProcessTrackingEvent = z
  .object({
    event: z.literal("designer_change_process"),
    payload: z
      .object({
        type: z.union([IngredientMetadataType, z.null()]).optional(),
        oldProcess: z.union([Process, z.null()]).optional(),
        newProcess: z.union([Process, z.null()]).optional(),
      })
      .strict(),
  })
  .strict();
export type DesignerChangeProcessTrackingEvent = z.infer<
  typeof DesignerChangeProcessTrackingEvent
>;
