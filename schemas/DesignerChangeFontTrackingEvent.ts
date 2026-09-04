import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { IngredientMetadataType } from "./IngredientMetadataType.js";

const _DesignerChangeFontTrackingEvent = z
  .object({
    event: z.literal("designer_change_font"),
    payload: z
      .object({
        type: z.union([IngredientMetadataType, z.null()]).optional(),
        oldFont: z.string(),
        newFont: z.string(),
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
type _DesignerChangeFontTrackingEventSchema =
  typeof _DesignerChangeFontTrackingEvent;
export interface DesignerChangeFontTrackingEventSchema extends _DesignerChangeFontTrackingEventSchema {}
export const DesignerChangeFontTrackingEvent: DesignerChangeFontTrackingEventSchema =
  _DesignerChangeFontTrackingEvent;
export type DesignerChangeFontTrackingEvent = z.infer<
  typeof DesignerChangeFontTrackingEvent
>;
