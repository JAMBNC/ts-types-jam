import { z } from "zod";
import { DesignerAnalyticsEvent } from "./DesignerAnalyticsEvent.js";
import { DesignerCartEvent } from "./DesignerCartEvent.js";
import { DesignerChangeProductEvent } from "./DesignerChangeProductEvent.js";
import { DesignerLoginEvent } from "./DesignerLoginEvent.js";
import { DesignerLogoClickEvent } from "./DesignerLogoClickEvent.js";
import { DesignerPersistenceEvent } from "./DesignerPersistenceEvent.js";
import { DesignerReinitializeEvent } from "./DesignerReinitializeEvent.js";
import { DesignerReviewEvent } from "./DesignerReviewEvent.js";
import { DesignerSaveEvent } from "./DesignerSaveEvent.js";

const _DesignerEvent = z
  .union([
    DesignerAnalyticsEvent,
    DesignerSaveEvent,
    DesignerReviewEvent,
    DesignerPersistenceEvent,
    DesignerLogoClickEvent,
    DesignerLoginEvent,
    DesignerCartEvent,
    DesignerChangeProductEvent,
    DesignerReinitializeEvent,
  ])
  .describe(
    "A discriminated union of events emitted by the designer, keyed by event type.",
  );
type _DesignerEventSchema = typeof _DesignerEvent;
export interface DesignerEventSchema extends _DesignerEventSchema {}
/**A discriminated union of events emitted by the designer, keyed by event type.*/
export const DesignerEvent: DesignerEventSchema = _DesignerEvent;
export type DesignerEvent = z.infer<typeof DesignerEvent>;
