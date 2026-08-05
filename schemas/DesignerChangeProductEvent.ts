import { z } from "zod";

const _DesignerChangeProductEvent = z
  .object({
    type: z.literal("changeProduct"),
    payload: z.object({ sku: z.string() }).strict(),
  })
  .strict()
  .describe("Event emitted when the designer requests a product change");
type _DesignerChangeProductEventSchema = typeof _DesignerChangeProductEvent;
export interface DesignerChangeProductEventSchema extends _DesignerChangeProductEventSchema {}
/**Event emitted when the designer requests a product change*/
export const DesignerChangeProductEvent: DesignerChangeProductEventSchema =
  _DesignerChangeProductEvent;
export type DesignerChangeProductEvent = z.infer<
  typeof DesignerChangeProductEvent
>;
