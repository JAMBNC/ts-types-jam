import { z } from "zod";
declare const _DesignerMediaRenditionResponse: z.ZodUnion<readonly [import("./DesignerMediaRenditionSuccessResponse.js").DesignerMediaRenditionSuccessResponseSchema, import("./DesignerMediaRenditionErrorResponse.js").DesignerMediaRenditionErrorResponseSchema]>;
type _DesignerMediaRenditionResponseSchema = typeof _DesignerMediaRenditionResponse;
export interface DesignerMediaRenditionResponseSchema extends _DesignerMediaRenditionResponseSchema {
}
/**The response from the media rendition endpoint.*/
export declare const DesignerMediaRenditionResponse: DesignerMediaRenditionResponseSchema;
export type DesignerMediaRenditionResponse = z.infer<typeof DesignerMediaRenditionResponse>;
export {};
//# sourceMappingURL=DesignerMediaRenditionResponse.d.ts.map