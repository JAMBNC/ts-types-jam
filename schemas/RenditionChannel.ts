import { z } from "zod";
import { RenditionSource } from "./RenditionSource.js";

/**A single color-profile rendition (e.g. rgb or cmyk) with its source metadata and output URL.*/
export const RenditionChannel = z
  .object({
    /**Metadata about the source file for a rendition.*/
    source: RenditionSource,
    /**The URL of the rendered output file.*/
    url: z.string().url().describe("The URL of the rendered output file."),
  })
  .strict()
  .describe(
    "A single color-profile rendition (e.g. rgb or cmyk) with its source metadata and output URL.",
  );
export type RenditionChannel = z.infer<typeof RenditionChannel>;
