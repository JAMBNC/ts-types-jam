import { z } from "zod";
declare const _DesignerEvent: z.ZodUnion<readonly [import("./DesignerAnalyticsEvent.js").DesignerAnalyticsEventSchema, import("./DesignerSaveEvent.js").DesignerSaveEventSchema, import("./DesignerReviewEvent.js").DesignerReviewEventSchema, import("./DesignerPersistenceEvent.js").DesignerPersistenceEventSchema, import("./DesignerLogoClickEvent.js").DesignerLogoClickEventSchema, import("./DesignerLoginEvent.js").DesignerLoginEventSchema, import("./DesignerCartEvent.js").DesignerCartEventSchema, import("./DesignerChangeProductEvent.js").DesignerChangeProductEventSchema, import("./DesignerReinitializeEvent.js").DesignerReinitializeEventSchema]>;
type _DesignerEventSchema = typeof _DesignerEvent;
export interface DesignerEventSchema extends _DesignerEventSchema {
}
/**A discriminated union of events emitted by the designer, keyed by event type.*/
export declare const DesignerEvent: DesignerEventSchema;
export type DesignerEvent = z.infer<typeof DesignerEvent>;
export {};
//# sourceMappingURL=DesignerEvent.d.ts.map