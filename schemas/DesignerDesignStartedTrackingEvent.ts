import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

const _DesignerDesignStartedTrackingEvent = z
  .object({
    event: z.literal("designer_design_started"),
    payload: DefaultTrackingPayload,
  })
  .strict();
type _DesignerDesignStartedTrackingEventSchema =
  typeof _DesignerDesignStartedTrackingEvent;
export interface DesignerDesignStartedTrackingEventSchema extends _DesignerDesignStartedTrackingEventSchema {}
export const DesignerDesignStartedTrackingEvent: DesignerDesignStartedTrackingEventSchema =
  _DesignerDesignStartedTrackingEvent;
export type DesignerDesignStartedTrackingEvent = z.infer<
  typeof DesignerDesignStartedTrackingEvent
>;
