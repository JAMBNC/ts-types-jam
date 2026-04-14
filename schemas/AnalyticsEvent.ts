import { z } from "zod";
import { TrackingEvent_designer_add_image } from "./TrackingEvent_designer_add_image.js";
import { TrackingEvent_designer_add_mailing_address } from "./TrackingEvent_designer_add_mailing_address.js";
import { TrackingEvent_designer_add_return_address } from "./TrackingEvent_designer_add_return_address.js";
import { TrackingEvent_designer_add_text } from "./TrackingEvent_designer_add_text.js";
import { TrackingEvent_designer_change_color } from "./TrackingEvent_designer_change_color.js";
import { TrackingEvent_designer_change_font } from "./TrackingEvent_designer_change_font.js";
import { TrackingEvent_designer_change_process } from "./TrackingEvent_designer_change_process.js";
import { TrackingEvent_designer_design_started } from "./TrackingEvent_designer_design_started.js";
import { TrackingEvent_designer_download_proof } from "./TrackingEvent_designer_download_proof.js";
import { TrackingEvent_designer_image_removed_from_gallery } from "./TrackingEvent_designer_image_removed_from_gallery.js";
import { TrackingEvent_designer_image_uploaded } from "./TrackingEvent_designer_image_uploaded.js";
import { TrackingEvent_designer_load } from "./TrackingEvent_designer_load.js";
import { TrackingEvent_designer_print_preview_viewed } from "./TrackingEvent_designer_print_preview_viewed.js";
import { TrackingEvent_designer_remove_item } from "./TrackingEvent_designer_remove_item.js";
import { TrackingEvent_designer_review_design } from "./TrackingEvent_designer_review_design.js";
import { TrackingEvent_designer_tool_interaction } from "./TrackingEvent_designer_tool_interaction.js";

/**An analytics/tracking event emitted by the designer.*/
export const AnalyticsEvent = z
  .object({
    type: z.literal("analytics"),
    payload: z.union([
      TrackingEvent_designer_load,
      TrackingEvent_designer_tool_interaction,
      TrackingEvent_designer_review_design,
      TrackingEvent_designer_design_started,
      TrackingEvent_designer_add_text,
      TrackingEvent_designer_add_image,
      TrackingEvent_designer_add_mailing_address,
      TrackingEvent_designer_add_return_address,
      TrackingEvent_designer_remove_item,
      TrackingEvent_designer_change_color,
      TrackingEvent_designer_change_font,
      TrackingEvent_designer_change_process,
      TrackingEvent_designer_image_uploaded,
      TrackingEvent_designer_image_removed_from_gallery,
      TrackingEvent_designer_print_preview_viewed,
      TrackingEvent_designer_download_proof,
    ]),
  })
  .strict()
  .describe("An analytics/tracking event emitted by the designer.");
export type AnalyticsEvent = z.infer<typeof AnalyticsEvent>;
