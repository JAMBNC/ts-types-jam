import { z } from "zod";
import { DesignerAddImageTrackingEvent } from "./DesignerAddImageTrackingEvent.js";
import { DesignerAddMailingAddressTrackingEvent } from "./DesignerAddMailingAddressTrackingEvent.js";
import { DesignerAddReturnAddressTrackingEvent } from "./DesignerAddReturnAddressTrackingEvent.js";
import { DesignerAddTextTrackingEvent } from "./DesignerAddTextTrackingEvent.js";
import { DesignerChangeColorTrackingEvent } from "./DesignerChangeColorTrackingEvent.js";
import { DesignerChangeFontTrackingEvent } from "./DesignerChangeFontTrackingEvent.js";
import { DesignerChangeProcessTrackingEvent } from "./DesignerChangeProcessTrackingEvent.js";
import { DesignerDesignSavedTrackingEvent } from "./DesignerDesignSavedTrackingEvent.js";
import { DesignerDesignStartedTrackingEvent } from "./DesignerDesignStartedTrackingEvent.js";
import { DesignerDownloadProofTrackingEvent } from "./DesignerDownloadProofTrackingEvent.js";
import { DesignerImageRemovedFromGalleryTrackingEvent } from "./DesignerImageRemovedFromGalleryTrackingEvent.js";
import { DesignerImageUploadedTrackingEvent } from "./DesignerImageUploadedTrackingEvent.js";
import { DesignerLoadTrackingEvent } from "./DesignerLoadTrackingEvent.js";
import { DesignerPrintPreviewViewedTrackingEvent } from "./DesignerPrintPreviewViewedTrackingEvent.js";
import { DesignerRemoveItemTrackingEvent } from "./DesignerRemoveItemTrackingEvent.js";
import { DesignerReviewDesignTrackingEvent } from "./DesignerReviewDesignTrackingEvent.js";
import { DesignerToolInteractionTrackingEvent } from "./DesignerToolInteractionTrackingEvent.js";

/**An analytics/tracking event emitted by the designer.*/
export const DesignerAnalyticsEvent = z
  .object({
    type: z.literal("analytics"),
    payload: z.union([
      DesignerLoadTrackingEvent,
      DesignerToolInteractionTrackingEvent,
      DesignerReviewDesignTrackingEvent,
      DesignerDesignStartedTrackingEvent,
      DesignerAddTextTrackingEvent,
      DesignerAddImageTrackingEvent,
      DesignerAddMailingAddressTrackingEvent,
      DesignerAddReturnAddressTrackingEvent,
      DesignerRemoveItemTrackingEvent,
      DesignerChangeColorTrackingEvent,
      DesignerChangeFontTrackingEvent,
      DesignerChangeProcessTrackingEvent,
      DesignerImageUploadedTrackingEvent,
      DesignerImageRemovedFromGalleryTrackingEvent,
      DesignerPrintPreviewViewedTrackingEvent,
      DesignerDownloadProofTrackingEvent,
      DesignerDesignSavedTrackingEvent,
    ]),
  })
  .strict()
  .describe("An analytics/tracking event emitted by the designer.");
export type DesignerAnalyticsEvent = z.infer<typeof DesignerAnalyticsEvent>;
