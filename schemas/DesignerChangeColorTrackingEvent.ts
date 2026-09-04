import { z } from "zod";
import { Color } from "./Color.js";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { IngredientMetadataType } from "./IngredientMetadataType.js";

const _DesignerChangeColorTrackingEvent = z
  .object({
    event: z.literal("designer_change_color"),
    payload: z
      .object({
        type: z.union([IngredientMetadataType, z.null()]).optional(),
        oldColors: z.array(Color),
        newColors: z.array(Color),
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
type _DesignerChangeColorTrackingEventSchema =
  typeof _DesignerChangeColorTrackingEvent;
export interface DesignerChangeColorTrackingEventSchema extends _DesignerChangeColorTrackingEventSchema {}
export const DesignerChangeColorTrackingEvent: DesignerChangeColorTrackingEventSchema =
  _DesignerChangeColorTrackingEvent;
export type DesignerChangeColorTrackingEvent = z.infer<
  typeof DesignerChangeColorTrackingEvent
>;
