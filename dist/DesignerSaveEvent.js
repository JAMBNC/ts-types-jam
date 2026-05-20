import { z } from "zod";
/**Event emitted when the designer saves the current design state.*/
export const DesignerSaveEvent = z
    .object({
    type: z.literal("save"),
    payload: z
        .object({
        addressListId: z.number().int(),
        alchemySnapshots: z.string(),
        autoSeparated: z.boolean(),
        config: z.string(),
        isCmyk: z.boolean(),
        orientation: z.number().int(),
        pages: z.string(),
        pagesOrdered: z.string(),
        preflight: z.string(),
        productSku: z.string(),
        qty: z.number().int(),
        returnAddressString: z.string(),
        sRecipAddressString: z.string(),
        designerInstanceCode: z.string(),
        /**Uuid to pass back with the response*/
        saveRequestUuid: z
            .string()
            .regex(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
            .describe("Uuid to pass back with the response")
            .optional(),
    })
        .strict(),
})
    .strict()
    .describe("Event emitted when the designer saves the current design state.");
