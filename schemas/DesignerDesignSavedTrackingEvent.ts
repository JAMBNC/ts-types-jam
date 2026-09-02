import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";

const _DesignerDesignSavedTrackingEvent = z
  .object({
    event: z.literal("designer_design_saved"),
    payload: z
      .object({
        designUuid: z.string(),
        snapshots: z.array(
          z.object({ url: z.string().url(), label: z.string() }).strict(),
        ),
        /**Primary image used for previewing the design in cards or lists.*/
        designPreviewImage: z
          .string()
          .url()
          .describe(
            "Primary image used for previewing the design in cards or lists.",
          ),
        designReturnUrl: z.string().url(),
        /**An analytics/tracking code to help id the designer event source.*/
        designer: DesignerCode,
        merchant: z.any(),
        /**Time since the initial load in seconds*/
        deltaTime: DeltaTime,
      })
      .strict(),
  })
  .strict();
type _DesignerDesignSavedTrackingEventSchema =
  typeof _DesignerDesignSavedTrackingEvent;
export interface DesignerDesignSavedTrackingEventSchema extends _DesignerDesignSavedTrackingEventSchema {}
export const DesignerDesignSavedTrackingEvent: DesignerDesignSavedTrackingEventSchema =
  _DesignerDesignSavedTrackingEvent;
export type DesignerDesignSavedTrackingEvent = z.infer<
  typeof DesignerDesignSavedTrackingEvent
>;
