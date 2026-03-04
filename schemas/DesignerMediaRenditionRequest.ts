import { z } from "zod";
import { Process } from "./Process.js";

/**The request body for the media rendition endpoint.*/
export const DesignerMediaRenditionRequest = z
  .object({
    /**The media rendition payload.*/
    data: z
      .object({
        /**The color process to use for the rendition.*/
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
