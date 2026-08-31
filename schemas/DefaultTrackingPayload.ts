import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";

const _DefaultTrackingPayload = z
  .object({
    /**An analytics/tracking code to help id the designer event source.*/
    designer: DesignerCode,
    /**Partner Code*/
    partner: z.string().describe("Partner Code").optional(),
    /**Channel Code*/
    channel: z.string().describe("Channel Code").optional(),
    /**Time since the initial load in seconds*/
    deltaTime: DeltaTime,
  })
  .strict();
type _DefaultTrackingPayloadSchema = typeof _DefaultTrackingPayload;
export interface DefaultTrackingPayloadSchema extends _DefaultTrackingPayloadSchema {}
export const DefaultTrackingPayload: DefaultTrackingPayloadSchema =
  _DefaultTrackingPayload;
export type DefaultTrackingPayload = z.infer<typeof DefaultTrackingPayload>;
