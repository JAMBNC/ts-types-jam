import { z } from "zod";
/**The response from the design media delete endpoint.*/
export declare const DesignerMediaDeleteResponse: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type DesignerMediaDeleteResponse = z.infer<typeof DesignerMediaDeleteResponse>;
//# sourceMappingURL=DesignerMediaDeleteResponse.d.ts.map