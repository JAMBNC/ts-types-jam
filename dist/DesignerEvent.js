import { z } from "zod";
import { DesignerAnalyticsEvent } from "./DesignerAnalyticsEvent.js";
import { DesignerLoginEvent } from "./DesignerLoginEvent.js";
import { DesignerLogoClickEvent } from "./DesignerLogoClickEvent.js";
import { DesignerPersistenceEvent } from "./DesignerPersistenceEvent.js";
import { DesignerReviewEvent } from "./DesignerReviewEvent.js";
import { DesignerSaveEvent } from "./DesignerSaveEvent.js";
/**A discriminated union of events emitted by the designer, keyed by event type.*/
export const DesignerEvent = z
    .union([
    DesignerAnalyticsEvent,
    DesignerSaveEvent,
    DesignerReviewEvent,
    DesignerPersistenceEvent,
    DesignerLogoClickEvent,
    DesignerLoginEvent,
])
    .describe("A discriminated union of events emitted by the designer, keyed by event type.");
