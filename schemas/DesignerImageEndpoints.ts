import { z } from "zod";

const _DesignerImageEndpoints = z
  .object({
    /**The endpoint URL for fetching the users image gallery. (uses the DesignerAuth.endpointAuth)*/
    gallery: z
      .string()
      .url()
      .describe(
        "The endpoint URL for fetching the users image gallery. (uses the DesignerAuth.endpointAuth)",
      ),
    upload: z.any(),
    /**The endpoint URL for removing an image from the gallery. (uses the DesignerAuth.endpointAuth)*/
    delete: z
      .string()
      .url()
      .describe(
        "The endpoint URL for removing an image from the gallery. (uses the DesignerAuth.endpointAuth)",
      ),
    /**The endpoint URL for fetching a rendition of an image from the gallery. (uses the DesignerAuth.endpointAuth)*/
    rendition: z
      .string()
      .url()
      .describe(
        "The endpoint URL for fetching a rendition of an image from the gallery. (uses the DesignerAuth.endpointAuth)",
      ),
    /**The endpoint url to use for fetching images through the api proxy*/
    templateAsset: z
      .string()
      .url()
      .describe(
        "The endpoint url to use for fetching images through the api proxy",
      ),
  })
  .strict();
type _DesignerImageEndpointsSchema = typeof _DesignerImageEndpoints;
export interface DesignerImageEndpointsSchema extends _DesignerImageEndpointsSchema {}
export const DesignerImageEndpoints: DesignerImageEndpointsSchema =
  _DesignerImageEndpoints;
export type DesignerImageEndpoints = z.infer<typeof DesignerImageEndpoints>;
