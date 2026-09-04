import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { IngredientMetadataType } from "./IngredientMetadataType.js";
import { Process } from "./Process.js";

const _DesignerChangeProcessTrackingEvent = z
  .object({
    event: z.literal("designer_change_process"),
    payload: z
      .object({
        type: z.union([IngredientMetadataType, z.null()]).optional(),
        oldProcess: z.union([Process, z.null()]).optional(),
        newProcess: z.union([Process, z.null()]).optional(),
        /**An analytics/tracking code to help id the designer event source.*/
        designer: DesignerCode,
        /**Partner Code*/
        partner: z.string().describe("Partner Code"),
        /**Channel Code*/
        channel: z.string().describe("Channel Code"),
        /**Time since the initial load in seconds*/
        deltaTime: DeltaTime,
      })
      .strict(),
  })
  .strict();
type _DesignerChangeProcessTrackingEventSchema =
  typeof _DesignerChangeProcessTrackingEvent;
export interface DesignerChangeProcessTrackingEventSchema extends _DesignerChangeProcessTrackingEventSchema {}
export const DesignerChangeProcessTrackingEvent: DesignerChangeProcessTrackingEventSchema =
  _DesignerChangeProcessTrackingEvent;
export type DesignerChangeProcessTrackingEvent = z.infer<
  typeof DesignerChangeProcessTrackingEvent
>;
