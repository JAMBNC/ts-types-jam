import { z } from "zod";
import { Process } from "./Process.js";

/**The request body for the media rendition endpoint.*/
export const DesignerMediaRenditionRequest = z
  .object({
    /**The media rendition payload.*/
    data: z
      .object({
        /**Defines how visual content is transferred to the medium.*/
        process: Process,
      })
      .strict()
      .describe("The media rendition payload."),
  })
  .strict()
  .describe("The request body for the media rendition endpoint.");
export type DesignerMediaRenditionRequest = z.infer<
  typeof DesignerMediaRenditionRequest
>;
