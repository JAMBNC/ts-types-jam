import { z } from "zod";
const _DesignerReinitializeRequestEvent = z
    .object({
    type: z.literal("reinitializeRequest"),
    payload: z
        .object({ sku: z.string().optional(), designUuid: z.string().optional() })
        .strict(),
})
    .strict()
    .describe("Event emitted when the designer requests a reinitialize");
/**Event emitted when the designer requests a reinitialize*/
export const DesignerReinitializeRequestEvent = _DesignerReinitializeRequestEvent;
