import { z } from "zod";
/**Event emitted when the user proceeds to review their design.*/
export const DesignerReviewEvent = z
    .object({
    type: z.literal("review"),
    payload: z
        .object({
        /**The product being reviewed, if available.*/
        product: z
            .record(z.string(), z.any())
            .describe("The product being reviewed, if available.")
            .optional(),
        quantity: z.number().int(),
    })
        .strict(),
})
    .strict()
    .describe("Event emitted when the user proceeds to review their design.");
