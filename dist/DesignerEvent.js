import { z } from "zod";
import { AnalyticsEvent } from "./AnalyticsEvent.js";
import { LogoClickEvent } from "./LogoClickEvent.js";
import { PersistenceEvent } from "./PersistenceEvent.js";
import { ReviewEvent } from "./ReviewEvent.js";
import { SaveEvent } from "./SaveEvent.js";
/**A discriminated union of events emitted by the designer, keyed by event type.*/
export const DesignerEvent = z
    .union([
    AnalyticsEvent,
    SaveEvent,
    ReviewEvent,
    PersistenceEvent,
    LogoClickEvent,
])
    .describe("A discriminated union of events emitted by the designer, keyed by event type.");
