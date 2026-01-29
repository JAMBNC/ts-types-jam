import { z } from "zod";
export const DesignerAuth = z.object({
    /**The api key use for CHILI requests*/
    chiliAuth: z.any().describe("The api key use for CHILI requests"),
    /**The api key use for DesignerEndpoint requests*/
    endpointAuth: z
        .any()
        .describe("The api key use for DesignerEndpoint requests")
        .optional(),
});
