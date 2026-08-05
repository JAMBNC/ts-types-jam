import { z } from "zod";
declare const _DefaultTrackingPayload: z.ZodObject<{
    designer: import("./DesignerCode.js").DesignerCodeSchema;
    merchant: import("./MerchantCode.js").MerchantCodeSchema;
    deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
}, z.core.$strict>;
type _DefaultTrackingPayloadSchema = typeof _DefaultTrackingPayload;
export interface DefaultTrackingPayloadSchema extends _DefaultTrackingPayloadSchema {
}
export declare const DefaultTrackingPayload: DefaultTrackingPayloadSchema;
export type DefaultTrackingPayload = z.infer<typeof DefaultTrackingPayload>;
export {};
//# sourceMappingURL=DefaultTrackingPayload.d.ts.map