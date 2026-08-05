import { z } from "zod";
declare const _DesignerMediaDeleteResponse: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
type _DesignerMediaDeleteResponseSchema = typeof _DesignerMediaDeleteResponse;
export interface DesignerMediaDeleteResponseSchema extends _DesignerMediaDeleteResponseSchema {
}
/**The response from the design media delete endpoint.*/
export declare const DesignerMediaDeleteResponse: DesignerMediaDeleteResponseSchema;
export type DesignerMediaDeleteResponse = z.infer<typeof DesignerMediaDeleteResponse>;
export {};
//# sourceMappingURL=DesignerMediaDeleteResponse.d.ts.map